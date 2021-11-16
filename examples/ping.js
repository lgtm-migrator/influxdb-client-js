#!/usr/bin/node
/*
This example shows how to check state InfluxDB instance.
InfluxDB OSS APIs are available through '@influxdata/influxdb-client-apis' package.

See https://docs.influxdata.com/influxdb/v2.1/api/
*/

const {InfluxDB} = require('@influxdata/influxdb-client')
// const {PingAPI} = require('@influxdata/influxdb-client-apis')
const {PingAPI} = require('../packages/apis')
const {url} = require('./env')
const timeout = 10 * 1000 // timeout for ping

console.log('*** PING STATUS ***')
const influxDB = new InfluxDB({url, timeout})
const pingAPI = new PingAPI(influxDB)

pingAPI
  .getPing()
  .then(() => {
    console.log('\nPing SUCCESS')
  })
  .catch(error => {
    console.error(error)
    console.log('\nFinished ERROR')
  })
