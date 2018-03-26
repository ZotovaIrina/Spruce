import reducer from './reducer';

it('should return the initial state', () => {
    const INIT = {
        test: 'test'
    };
    expect(reducer(INIT, {})).toEqual(INIT);
});

it('should handle FETCH_CITIES_START fetching be true', () => {
    const startAction = {
        type: 'FETCH_CITIES_START'
    };
    let state = reducer( {}, startAction);
    expect(state.fetching).toEqual(true);
});

it('should handle RECEIVE_CITIES', () => {
    const someData = ['test city'];
    const startAction = {
        type: 'RECEIVE_CITIES',
        payload: someData
    };
    let state = reducer( {}, startAction);
    expect(state.fetching).toEqual(false);
    expect(state.fetched).toEqual(true);
    expect(state.cities).toEqual(someData);
});