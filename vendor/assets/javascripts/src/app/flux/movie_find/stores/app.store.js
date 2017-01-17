import AppDIspatcher from '../dispatchers/app.dispatcher';
import AppConstants from '../constants/app.constant';
import {EventEmitter} from 'events';
import assign from 'object-assign';
import AppAPI from '../utils/app.api';

const CHANGE_EVENT = 'change';

var _movies = [];
var _selected = '';

var AppStore = assign({}, EventEmitter.prototype, {
  emitChange: () => {
    this.emit(CHANGE_EVENT);
  },
  addChangeListener: (callback) => {
    this.on('change', callback);
  },
  removeChangeListener: (callback) => {
    this.removeListener('change', callback);
  }
});

AppDIspatcher.register( (payload) => {
  let action = payload.action;

  switch(action.actionType) {

  }

  return true;
})

export default AppStore;
