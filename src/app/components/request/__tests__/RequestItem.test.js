import React from 'react';
import RequestItem from '../RequestItem';
import renderer from 'react-test-renderer';

test('RequestItem has been rendered', () => {

  const item = renderer.create(
    <RequestItemModal item={this.state.item} showModal={this.state.showModal}/>
  );

  let itemJSON = item.toJSON();
  expect(itemJSON).toMatchSnapshot();

})
