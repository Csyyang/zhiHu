function formatTime(date) {
  var year = date.getFullYear()
  var month = date.getMonth() + 1
  var day = date.getDate()

  var hour = date.getHours()
  var minute = date.getMinutes()
  var second = date.getSeconds()


  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

function formatNumber(n) {
  n = n.toString()
  return n[1] ? n : '0' + n
}

// module.exports = {
//   formatTime: formatTime
// };

// var index = require('../data/data_index.js')
// var index_next = require('../data/data_index_next.js')
// var discovery = require('../data/data_discovery.js')
// var discovery_next = require('../data/data_discovery_next.js')

import index from '../data/data_index.js'
import index_next from '../data/data_index_next.js'
import discovery from '../data/data_discovery.js'
import discovery_next from '../data/data_discovery_next.js'


function getData(url){
  return new Promise(function(resolve, reject){
    wx.request({
      url: url,
      data: {},
      header: {
        //'Content-Type': 'application/json'
      },
      success: function(res) {
        console.log("success")
        resolve(res)
      },
      fail: function (res) {
        reject(res)
        console.log("failed")
      }
    })
  })
}

function getData2(){
  return index.data;
}

function getNext(){
  return index_next.next;
}

function getDiscovery(){
  return discovery.discovery;
}

function discoveryNext(){
  return discovery_next.next;
}

export {
  getData,
  getData2,
  getNext,
  getDiscovery,
  discoveryNext,
  formatTime
}



