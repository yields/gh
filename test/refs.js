
var Client = require('..');

describe('gh.releases(repo, fn)', function(){
  it('should respond with private releases via .token', function(done){
    var gh = new Client({
      token: process.env.TOKEN
    });

    gh.refs('segmentio/accounts', function(err, refs){
      if (err) return done(err);
      refs.should.not.be.empty;
      refs[0].should.have.property('name');
      // refs[0].should.have.property('commit');
      done();
    });
  })

  it('should respond with private refs via .user / .pass', function(done){
    var gh = new Client({
      user: process.env.USER,
      pass: process.env.PASS
    });

    gh.refs(process.env.PRIVATE, function(err, refs){
      if (err) return done(err);
      refs.should.not.be.empty;
      refs[0].should.have.property('name');
      // refs[0].should.have.property('commit');
      done();
    });
  })

  it('should respond with public refs', function(done){
    var gh = new Client;

    gh.refs('visionmedia/debug', function(err, refs){
      if (err) return done(err);
      refs.should.not.be.empty;
      refs[0].should.have.property('name');
      // refs[0].should.have.property('commit');
      done();
    });
  })
})
