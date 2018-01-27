/*
*  Command for start:  NODE_ENV=test mocha 
*/
const logic1 = require('../myFirst');
const logic2 = require('../mySecond');
const logic3 = require('../shortest');
const should = require('should');
// make sure you run it in test env
should(process.env.NODE_ENV).eql('test');

describe('Test for balanced Brackets ', () => {

    it('Brackets balanced', ()=>{
       logic1('[([]{[]})]').should.be.true();
       logic2('[([]{[]})]').should.be.true();
       logic3('[([]{[]})]').should.be.true();
    });

    context('Brackets not balanced',()=>{
        it('{[}] not balanced', ()=>{
           logic1('{[}]').should.be.false();
           logic2('{[}]').should.be.false();
           logic3('{[}]').should.be.false();
        });
        it('[{)] not balanced', ()=>{
           logic1('[{)]').should.be.false();
           logic2('[{)]').should.be.false();
           logic3('[{)]').should.be.false();
        });
        it(']{}[ not balanced', ()=>{
           logic1(']{}[').should.be.false();
           logic2(']{}[').should.be.false();
           logic3(']{}[').should.be.false();
        });
    });
});