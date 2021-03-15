import React from 'react';
import { mount } from 'enzyme';

import { AppRouter } from '../../Routers/AppRouter';
import { AuthContext } from '../../auth/authContext';
import { contextLogin } from '../fixtures/contextLogin';
import { contextLogout } from '../fixtures/contextLogout';


describe('Testing Routers: AppRouter', () => {

    test('should render login component if user is not authenticated', () => {
        
        const wrapper = mount(
            <AuthContext.Provider value={ contextLogout }>
                <AppRouter />
            </AuthContext.Provider>
        );

        expect( wrapper ).toMatchSnapshot();

        expect( wrapper.find('.login-container').exists() ).toBe( true );
        expect( wrapper.find('button').text().trim() ).toBe('Sign in');
    });

    test('should render MarvelPage component if user is authenticated', () => {
        
        const wrapper = mount(
            <AuthContext.Provider value={ contextLogin }>
                <AppRouter />
            </AuthContext.Provider>
        );

        expect( wrapper.find('.navbar').exists() ).toBe( true );
    });
    


    
});
