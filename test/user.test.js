process.env.NODE_ENV = 'test';

const bcrypt = require('bcryptjs');
const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('./../app');

const should = chai.should();

chai.use(chaiHttp);
// Our parent block
describe('Users', () => {
  before(() => require('./../models').sequelize.sync());
  beforeEach((done) => {
    this.models = require('./../models');
    done();
  });
  describe('POST /users', () => {
    it('it should create the user', (done) => {
      const user = {
        email: `mabc224${Math.random().toFixed(4)}@gmail.com`,
        password: 'some_password',
      };
      chai.request(server)
        .post('/api/v1/users')
        .send(user)
        .end((err, res) => {
          res.should.have.status(201);
          res.body.should.be.a('object');
          res.body.should.have.property('email');
          done();
        });
    });
  });

  describe('/GET users/:id', () => {
    it('it should fetch user by id', async () => {
      const user = {
        email: `mabc224${Math.random().toFixed(8)}@gmail.com`,
        password: 'some_password',
      };
      const salt = bcrypt.genSaltSync(10);
      const hash = bcrypt.hashSync(user.password, salt);

      const userCreated = (await this.models.User.create({ email: user.email, password: hash })).toJSON();
      chai.request(server)
        .get(`/api/v1/users/${userCreated.id}`)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          res.body.should.have.property('email');
        });
    });
  });

  describe('/PUT users/:id', () => {
    it('it should update user by id', async () => {
      const user = {
        email: `mabc224${Math.random().toFixed(8)}@gmail.com`,
        password: 'some_password',
      };
      const salt = bcrypt.genSaltSync(10);
      const hash = bcrypt.hashSync(user.password, salt);

      const userCreated = (await this.models.User.create({ email: user.email, password: hash })).toJSON();
      chai.request(server)
        .put(`/api/v1/users/${userCreated.id}`)
        .send({ email: `mabc224${Math.random().toFixed(8)}@gmail.com` })
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          res.body.should.have.property('email');
        });
    });
  });

  describe('/DEL users/:id', () => {
    it('it should delete user by id', async () => {
      const user = {
        email: `mabc224${Math.random().toFixed(8)}@gmail.com`,
        password: 'some_password',
      };
      const salt = bcrypt.genSaltSync(10);
      const hash = bcrypt.hashSync(user.password, salt);

      const userCreated = (await this.models.User.create({ email: user.email, password: hash })).toJSON();
      chai.request(server)
        .del(`/api/v1/users/${userCreated.id}`)
        .end((err, res) => {
          res.should.have.status(204);
          res.body.should.be.a('object');
        });
    });
  });
});