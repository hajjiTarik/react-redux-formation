import React from "react";
import renderer from 'react-test-renderer';
import { Preview } from "../index";

function renderWithMutations (Component, mutations)  {
  mutations.map((mutation)=> {
    it(mutation.test, ()=> {
      const component = renderer.create(<Component {...mutation.props} />).toJSON();
      expect(component).toMatchSnapshot();
    });
  })
}

describe("Test Preview", ()=> {
    const mutations = [
      {
        test: "Should render without props",
        props: {
          rotate: "bobo"
        }
      },
      {
        test: "Should render without props",
        props: {
          rotate: "tootoo"
        }
      }
    ];
    renderWithMutations(Preview, mutations);
});
