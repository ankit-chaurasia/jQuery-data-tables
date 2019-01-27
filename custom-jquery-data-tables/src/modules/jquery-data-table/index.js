import $ from 'jquery';
import 'datatables.net';
import 'datatables.net-bs';
import 'datatables.net-scroller';
import 'datatables.net-scroller-bs';
import defaultTableConfig from './table-config';

export default (customConfig) => {
  const { id } = customConfig;
  const config = {
    ...defaultTableConfig,
    ...customConfig
  };
  return $(`${id}`).DataTable(config);
};
