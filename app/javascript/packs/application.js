require("@rails/ujs").start()
require("turbolinks").start()
require("channels")

import flatpickr from 'flatpickr';
import 'flatpickr/dist/themes/airbnb.css';

flatpickr(".date-picker", {
  altInput: true,
  enableTime: true
});

