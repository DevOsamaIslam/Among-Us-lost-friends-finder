import React from 'react'
import MaterialTable from 'material-table'
// import Avatar from './Avatar'
// <Avatar><avatar/>

const placeholder = {
  tags: ['Osama', 'Alamo', 'Ahmed', 'Salim', 'Fattah', 'Malik', 'Noor'],
  colors: ['White', 'Black', 'Brown', 'Orange', 'Green', 'Lime', 'Purple', 'Cyan', 'Blue', 'Red', 'Yellow'],
  servers: ['Asia', 'Europe', 'North America'],
  maps: ['Skeld', 'Mira HQ', 'Polus'],
  dates: ['22/11/2020', '21/10/2020', '10/12/2019', '02/06/2020', '12/11/2020']
}

export const Table = () => {
  const data = []
  let {
    tags, colors, servers, maps, dates
  } = placeholder
  for (let i = 0; i < 1000; i++) {
    data.push({
      yourname: tags[Math.floor((Math.random()* tags.length))],
      yourcolor: colors[Math.floor((Math.random()* colors.length))],
      theirname: tags[Math.floor((Math.random()* tags.length))],
      theircolor: colors[Math.floor((Math.random()* colors.length))],
      serverLocation: servers[Math.floor((Math.random()* servers.length))],
      map: maps[Math.floor((Math.random()* maps.length))],
      date: dates[Math.floor((Math.random()* dates.length))],
      screenshotvideo: 'png,vid'
    })
        
  }
  
  
  const columns = [
    {
      title: 'Tag Name',
      field: 'yourname'
    },
    {
      title: 'Your Color',
      field: 'yourcolor'
    },
    {
      
      title: 'Looking For',
      field: 'theirname'
    },
    {
      title: 'Their Color',
      field: 'theircolor'
    },
    {
      title: 'Server location',
      field: 'serverLocation'
    },
    {
      title: 'Map',
      field: 'map'
    },
    {
      title: 'Date',
      field: 'date'
    },
    {
      title: 'Screenshot/video',
      field: 'screenshot/video'
    },
  ]

  return ( < div >
    <
      MaterialTable title = ""
      data = {
        data
      }
      columns = {
        columns
      }

      options = {
        {
          search: false,
          filtering: true,
          filterCellStyle: {

          }
        }
      }
    />
     </div> )
}


export default Table