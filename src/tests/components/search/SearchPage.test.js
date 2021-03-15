import React from 'react'
import { mount } from 'enzyme';
import { MemoryRouter, Route } from 'react-router-dom';
import { SearchPage } from '../../../components/search/SearchPage';


describe('Testing Components: SearchPage', () => {


    test('should render correctly with default values', () => {

        const wrapper = mount(
            <MemoryRouter initialEntries={['/search']}>
                <Route path="/search" component={ SearchPage } />
            </MemoryRouter>
        );
        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find('.alert-secondary').text().trim() ).toBe('Search a hero');

    });

    test('should render Batman Card and input with queryString value', () => {
        
        const wrapper = mount(
            <MemoryRouter initialEntries={['/search?q=batman']}>
                <Route path="/search" component={ SearchPage } />
            </MemoryRouter>
        );

        expect( wrapper.find('input').prop('value') ).toBe('batman');
        expect( wrapper.find('HeroCard').exists() ).toBe(true);
        expect( wrapper ).toMatchSnapshot();

    });

    test('should render alert error if the hero is not found', () => {
        
        const wrapper = mount(
            <MemoryRouter initialEntries={['/search?q=foo-man']}>
                <Route path="/search" component={ SearchPage } />
            </MemoryRouter>
        );

        expect( wrapper.find('.alert-danger').text().trim() ).toBe('There is not a hero with foo-man');
        expect( wrapper ).toMatchSnapshot();

    });

    test('should call history push', () => {

        const param = 'batman';
        const history = {
            push: jest.fn()
        };

        const wrapper = mount(
            <MemoryRouter initialEntries={['/search?q=' + param]}>
                <Route 
                    path="/search"
                    component={ 
                        () => <SearchPage history={ history }/> 
                    } />
            </MemoryRouter>
        );

        wrapper.find('button').simulate('change', {
            target: {
                name: 'searchText',
                value: param
            }
        });

        /* wrapper.find('form').prop('onSubmit')(
            { preventDefault: jest.fn() }
        ); */
        wrapper.find('form').simulate('submit')

        expect( history.push ).toBeCalledWith('?q=' + param );

    })
    
    
})
