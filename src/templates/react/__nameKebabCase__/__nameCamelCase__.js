import React, { <%= componentType %> } from 'react';
import PropTypes from 'prop-types';
<% if (stylesExtension) { %>import s from './styles.<%= stylesExtension %>';
<% } %>
export default class <%= nameCamelCase %> extends <%= componentType %> {
  static propTypes = {
    children: PropTypes.node,
  }

  static defaultProps = {
    children: undefined,
  }

  render() {
    return (
      <div className={s.host}>
        {this.props.children}
      </div>
    );
  }
}