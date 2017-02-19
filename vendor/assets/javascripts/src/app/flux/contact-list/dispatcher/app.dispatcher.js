import {Dispatcher} from 'flux';
import objectAssign from 'object-assign';

var AppDispatcher = objectAssign(new Dispatcher(), {
  handleViewAction: function(action) {
    let payload = {
      source: 'VIEW_ACTION',
      action: action
    };
    this.dispatch(payload);
  }
});

export default AppDispatcher;
