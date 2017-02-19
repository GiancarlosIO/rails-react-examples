import {Dispatcher} from 'flux';
import assign from 'object-assign';

var AppDispatcher = assign(new Dispatcher(), {
  handleViewAction: (action) => {
    let payload = {
      source: 'VIEW_ACTION',
      action: action
    };
    this.dispatch(payload);
  }
});

export default AppDispatcher;
