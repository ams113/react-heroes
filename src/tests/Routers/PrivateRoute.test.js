import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router';

import { PrivateRoute } from '../../Routers/PrivateRoute';

describe('Testing Routers: PrivateRoute', () => {

    const props = {
        location: {
            pathname: '/marvel'
        }
    };

    Storage.prototype.setItem = jest.fn();
    
    test('should render component if user is authenticated', () => {
        const wrapper = mount(
            <MemoryRouter>
                <PrivateRoute 
                    isAuthenticated={ true }
                    component={ () => <span>Test Passed!</span> }
                    { ...props }
                />
            </MemoryRouter>
        );         

        expect( wrapper.find('span').exists() ).toBe(true);
    });

    test('should save in localStored if user is authenticated', () => {

        mount(
            <MemoryRouter>
                <PrivateRoute 
                    isAuthenticated={ true }
                    component={ () => <span>Test Passed!</span> }
                    { ...props }
                />
            </MemoryRouter>
        ); 

        expect( localStorage.setItem ).toHaveBeenCalledWith('lastPath', '/marvel');
    });

    test('should reject the component rendering if not authenticated', () => {
        
        const wrapper = mount(
            <MemoryRouter>
                <PrivateRoute 
                    isAuthenticated={ false }
                    component={ () => <span>Test Passed!</span> }
                    { ...props }
                />
            </MemoryRouter>
        );         

        expect( wrapper.find('span').exists() ).toBe( false );
    });
       
});
