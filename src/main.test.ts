import {createFooBar} from './main'

test('it should generate a foobar',() => {
    expect(createFooBar()).toEqual({foo: 'a', bar: 42})
})
