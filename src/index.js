import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Vivus from 'vivus';

const builtInAnimTimingFunction = {
  EASE: Vivus.EASE,
  EASE_IN: Vivus.EASE_IN,
  EASE_OUT: Vivus.EASE_OUT,
  EASE_OUT_BOUNCE: Vivus.EASE_OUT_BOUNCE,
};

class ReactVivus extends PureComponent {
  componentDidMount() {
    const { id, option, callback } = this.props;
    let combinedOption = option;
    if (option.animTimingFunction) {
      combinedOption = {
        ...combinedOption,
        animTimingFunction: builtInAnimTimingFunction[option.animTimingFunction],
      };
    }
    if (option.pathTimingFunction) {
      combinedOption = {
        ...combinedOption,
        pathTimingFunction: builtInAnimTimingFunction[option.pathTimingFunction],
      };
    }
    new Vivus(id, combinedOption, callback);
  }

  render() {
    const { id, style, className } = this.props;
    return <div id={id} className={className} style={style} />;
  }
}

ReactVivus.defaultProps = {
  className: '',
  style: {},
  callback: undefined,
};

ReactVivus.propTypes = {
  id: PropTypes.string.isRequired,
  option: PropTypes.shape({
    type: PropTypes.string,
    file: PropTypes.string.isRequired,
    start: PropTypes.string,
    duration: PropTypes.number,
    delay: PropTypes.number,
    onReady: PropTypes.func,
    pathTimingFunction: PropTypes.string,
    animTimingFunction: PropTypes.string,
    dashGap: PropTypes.number,
    forceRender: PropTypes.bool,
    reverseStack: PropTypes.bool,
    selfDestroy: PropTypes.bool,
  }).isRequired,
  className: PropTypes.string,
  style: PropTypes.shape({}),
  callback: PropTypes.func,
};

export default ReactVivus;
