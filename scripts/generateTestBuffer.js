const path = require('path')
const fs   = require('fs')

const getBuffer  = require('../lib/utils/getBuffer')
const converters = require('../lib/converters')
const parseData  = require('../lib/parser/parseData')

try {

  const buffer = getBuffer('Local\\SCSTelemetry')
  const data   = parseData(converters[11](buffer))

  const folderPath = path.resolve(__dirname, '../tests/buffers')
  const filePath   = path.resolve(folderPath, `scs_sdk_plugin_buffer_${data.game.pluginVersion}`)

  fs.mkdirSync(folderPath, {recursive: true})
  fs.writeFileSync(filePath, buffer)

  console.log('Buffer file successfully generated')

} catch (err) {

  console.log(err.message)
  console.log('Unable to generate test buffer, please make sure the game is running and the scs-sdk-plugin is installed')

}
