import React from 'react';
import { mount } from 'enzyme';
import { HeroesPage } from '../../../components/heroes/HeroesPage';
import { MemoryRouter, Route } from 'react-router-dom';

describe('Testing Components: HeroesPage', () => {

    const historyMock = {
        length: 10,
        push: jest.fn(),
        goBack: jest.fn()
    };
    
    afterEach( ()=> {
        jest.clearAllMocks();
    });
    
    test('should render Redirect component if there are no parameters in the URL', () => {
        
        const wrapper = mount(
            <MemoryRouter initialEntries={['/hero']}>
                <HeroesPage history={ historyMock }/>
            </MemoryRouter>
        );
        expect( wrapper.find('Redirect').exists() ).toBe(true)
    });

    test('should render hero details if params are correct', () => {
        
        const wrapper = mount(
            <MemoryRouter initialEntries={['/hero/marvel-spider']}>
                <Route 
                    path="/hero/:id" 
                    component={ HeroesPage } 
                />
            </MemoryRouter>
        );
        expect( wrapper.find('.row').exists() ).toBe(true)
    });

    test('should return to the previous screen using PUSH', () => {
        const history = {
            length: 1,
            push: jest.fn(),
            goBack: jest.fn(),
            location: {}
        };

        const wrapper = mount(
            <MemoryRouter initialEntries={['/hero/marvel-spider']}>
                <Route 
                    path="/hero/:id" 
                    component={ () => <HeroesPage history ={ history } /> } 
                />
            </MemoryRouter>
        );

        wrapper.find('button').prop('onClick')();

        expect( history.push).toHaveBeenCalledWith('/');
        expect( history.goBack).not.toHaveBeenCalled();
    });

    test('should return to the previous screen using GOBACK', () => {
        
        const history = {
            length: 10,
            push: jest.fn(),
            goBack: jest.fn()
        };

        const wrapper = mount(
            <MemoryRouter initialEntries={['/hero/marvel-spider']}>
                <Route 
                    path="/hero/:id" 
                    component={ () => <HeroesPage history ={ history } /> } 
                />
            </MemoryRouter>
        );

        wrapper.find('button').prop('onClick')();

        expect( history.goBack ).toHaveBeenCalled();
        expect( history.push).toHaveBeenCalledTimes(0);
    });

    test('should call Redirect if hero no exist', () => {
        
        const wrapper = mount(
            <MemoryRouter initialEntries={['/hero/foo-man']}>
                <Route 
                    path="/hero/:id" 
                    component={ () => <HeroesPage history ={ historyMock } /> } 
                />
            </MemoryRouter>
        );
        expect( wrapper.text() ).toBe('');
    }); 
    
    
});
