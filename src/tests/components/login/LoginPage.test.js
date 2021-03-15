import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import { AuthContext } from '../../../auth/authContext';
import { LoginPage } from '../../../components/login/LoginPage';
import { types } from '../../../types/types';
import { contextLogout } from '../../fixtures/contextLogout';


describe('Testing Components: LoginPage', () => {

    const history = {
        replace: jest.fn()
    };

    const wrapper = mount(
        <AuthContext.Provider value={ contextLogout }>
            <MemoryRouter>
                <LoginPage history={ history }/>
            </MemoryRouter>
        </AuthContext.Provider>
    );

    test('should render correctly', () => {

        expect( wrapper ).toMatchSnapshot();
    });

    test('should perform dispatch and navigation ', () => {
        
        wrapper.find('button').simulate('click');

        expect( contextLogout.dispatch ).toHaveBeenCalledWith({
            type: types.login,
            payload: {
                name: 'Alfred'
            }
        })
        expect( history.replace ).toHaveBeenCalledWith('/');

    });

    test('should get lastPath from the localStorege', () => {
        
        const handleClick = wrapper.find('button').prop('onClick');
        localStorage.setItem('lastPath', '/dc');
        handleClick();
        expect( history.replace ).toHaveBeenCalledWith('/dc');
    });
    
});
