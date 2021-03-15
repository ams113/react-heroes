import { authReducer } from "../../auth/authReducer";
import { types } from "../../types/types";


const init = { logged: false }

describe('Testing components: authReducer', () => {


    test('should return default state', () => {
        const state = authReducer( init, {});
        expect( state ).toEqual(init);
        
    });


    test('should authenticate and establish name user and logged in true', () => {

        const result = {
             name: 'Alfred',
             logged: true };

        const action = {
            type: types.login,
            payload: { name: 'Alfred'}
        };

        const state = authReducer( init, action );
        expect( state ).toEqual( result );
    })

    test('should delete name user and logged in false', () => {
        const login = {
            name: 'Alfred',
            logged: true };

       const action = {
           type: types.logout,
       };

       const state = authReducer( login, action );
       expect( state ).toEqual( init );
    })
    
    
});


