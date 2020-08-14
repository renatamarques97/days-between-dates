require("@rails/ujs").start()
require("turbolinks").start()
require("channels")

import './bootstrap_custom.js'
import '../stylesheets/application'
import flatpickr from 'flatpickr';
import 'flatpickr/dist/themes/airbnb.css';

flatpickr(".date-picker", {
  altInput: true,
  enableTime: true
});

