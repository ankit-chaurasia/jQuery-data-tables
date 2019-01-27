import dataTable from './jquery-data-table';

const customTableConfig = {
  id: '#example',
  serverSide: true,
  searching: true,
  ordering: true,
  ajax: (data, callback, settings) => {
    let out = [];
    for (let i = data.start, ien = data.start + data.length; i < ien; i++) {
      out.push([i + '-1', i + '-2', i + '-3', i + '-4', i + '-5']);
    }
    setTimeout(function() {
      callback({
        draw: data.draw,
        data: out,
        recordsTotal: 5000000,
        recordsFiltered: 5000000
      });
    }, 50);
  }
};

const myTable = dataTable(customTableConfig);
