const inquirer = require('inquirer')
const ejs = require('ejs')
const path = require('path')
const fs = require('fs')

function destDir(anwsers) {
  const { fatherName, name, type } = anwsers
  let destPath = ''
  if (fatherName === '') {
    if (type === 'components') {
      fs.mkdir(path.join(path.join(__dirname, type), name), err => {
        if (err) {
          throw err
        }
      })
      destPath = path.join(path.join(path.join(__dirname, type), name), 'index.js')
    } else {
      destPath = path.join(path.join(__dirname, type), name + '.js')
    }
  } else {
    fs.mkdir(path.join(path.join(__dirname, type), fatherName), err => {
      if (err) {
        throw err
      }
    })
    destPath = path.join(path.join(path.join(__dirname, type), fatherName), name + '.js')
  }
  return destPath
}

// 在项目中新建一个路由页面
exports.create = done => {
  // 选择创建 组件 or 页面
  inquirer
    .prompt([
      {
        type: 'list',
        name: 'type',
        message: '请选择你要创建的组件类型?',
        choices: ['Pages', 'Components'],
        filter: val => val.toLowerCase()
      },
      {
        type: 'input',
        name: 'name',
        message: '请输入你要创建文件的名称,首字母大写！'
      },
      {
        type: 'input',
        name: 'fatherName',
        message: '如果有父级，请输入父级名称,没有直接回车'
      }
    ])
    .then(anwsers => {
      const tmplDir = path.join(__dirname, '_gulpTemplate')
      if (!anwsers.name) return
      fs.readdir(tmplDir, err => {
        if (err) throw err
        ejs.renderFile(path.join(tmplDir, `${anwsers.type}.js`), anwsers, (err, result) => {
          fs.writeFileSync(destDir(anwsers), result)
          console.log('文件创建成功')
        })
        done()
      })
    })
}
