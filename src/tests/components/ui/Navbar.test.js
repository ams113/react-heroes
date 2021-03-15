import React from 'react';
import { mount } from 'enzyme';
import { AuthContext } from '../../../auth/authContext';
import { Navbar } from '../../../components/ui/NavBar';
import { contextLogin } from '../../fixtures/contextLogin';
import { MemoryRouter, Router } from 'react-router-dom';
import { types } from '../../../types/types';


describe('Testing Components: Navbar', () => {

    const historyMock = {
        push: jest.fn(),
        location: {},
        listen: jest.fn(),
        createHref: jest.fn(),
        replace: jest.fn(),
    };
    
    const wrapper = mount(
        <AuthContext.Provider value={ contextLogin }>
            <MemoryRouter>
                <Router history={ historyMock }>
                    <Navbar />
                </Router>
            </MemoryRouter>
        </AuthContext.Provider>
    );

    afterEach( ()=> {
        jest.clearAllMocks();
    });

    test('should render correctly', () => {
   
        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find('a').at(0).text().trim() ).toBe( 'Publisher' );
        expect( wrapper.find('a').at(1).text().trim() ).toBe( 'Marvel' );
        expect( wrapper.find('a').at(2).text().trim() ).toBe( 'DC' );
        expect( wrapper.find('a').at(3).text().trim() ).toBe( 'Search' );
        expect( wrapper.find('.text-info').text().trim() ).toBe( 'Alfred' );
    });

    test('should call logout and use history correctly', () => {
        
        // wrapper.find('button').at(1).prop('onClick')();
        wrapper.find('button').at(1).simulate('click');

        expect( contextLogin.dispatch ).toHaveBeenCalledWith({
            type: types.logout
         });

         expect( historyMock.replace ).toHaveBeenCalledWith('/login');
         
    });
    
    
})
