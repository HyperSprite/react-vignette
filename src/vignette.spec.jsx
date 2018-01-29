import { shallow, mount } from 'enzyme';
import React from 'react';
import Vignette from './vignette';

const style = { height: 200, width: 200 };
const ImageDisplay = () => <div style={style}>Test</div>;

const TestItem = (
  <div>
    <ImageDisplay />
    <Vignette />
  </div>
);

test('Just render something with two children', () => {
  const wrapper = shallow(TestItem);
  expect(wrapper.render().children().length).toEqual(2);
});

const vignetteStyle = {
  position: 'absolute',
  top: 0,
  left: 0,
  width: 200,
  height: 100,
  background: 'radial-gradient( circle, transparent 70%, #020202 160%)',
};

test('Find class=vignette and check default styles', () => {
  const wrapper = mount(TestItem);
  Object.entries(vignetteStyle).forEach((item) => {
    expect(wrapper.find('.vignette')).toHaveStyle(item[0], item[1]);
  });
});

test('Find class=vignette and check props passed for width and height', () => {
  const obj = Object.assign(vignetteStyle, { width: 300, height: 250 });
  const wrapper = mount(<Vignette width={300} height={250} />);
  Object.entries(obj).forEach((item) => {
    expect(wrapper.find('.vignette')).toHaveStyle(item[0], item[1]);
  });
});
