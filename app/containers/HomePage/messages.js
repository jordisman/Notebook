/*
 * HomePage Messages
 *
 * This contains all the text for the HomePage container.
 */
import { defineMessages } from 'react-intl';
import moment from 'moment';

export const scope = 'app.containers.HomePage';

export default defineMessages({
  header: {
      id: `${scope}.header`,
      defaultMessage: `${moment().format("MMMM Do YYYY, h:mm a")}`,
    },
  p: {
    id: `${scope}.p`,
    defaultMessage: `What is your main focus for today?`
  }
});
