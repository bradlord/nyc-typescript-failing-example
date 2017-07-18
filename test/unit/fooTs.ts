import {expect} from "chai";
import {Foo, makeFoo, incrementFoo} from "../../src/fooTs";

describe("makeFoo", function () {
	it("handles negative numbers correctly", function () {
		const foo = makeFoo(-5);
		expect(foo.x).to.equal(5);
	});

	it("makes a Foo", function () {
		// const foo = makeFoo(5);
		// expect(foo.x).to.equal(5);
	});
});
