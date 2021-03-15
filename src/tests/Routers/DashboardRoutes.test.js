import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';

import { AuthContext } from '../../auth/authContext';
import { DashboardRoutes } from '../../Routers/DashboardRoutes';
import { contextLogin } from '../fixtures/contextLogin';

describe('Testing Routers: DashboardRoutes', () => {
    
    test('should render correctly', () => {
        const wrapper = mount(
            <AuthContext.Provider value={ contextLogin }>
                <MemoryRouter>
                    <DashboardRoutes />
                </MemoryRouter>
            </AuthContext.Provider>
        );

        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find('.navbar').exists() ).toBe( true );
        expect( wrapper.find('.text-info').text().trim() ).toBe( 'Alfred' );
    })
    
});
