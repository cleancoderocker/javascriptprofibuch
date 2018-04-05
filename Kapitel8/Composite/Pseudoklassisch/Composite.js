const Component = function(name) {
  this.name = name;
  this.getName = function() {
    return this.name;
  };
};

const File = function(name) {
  Component.call(this, name);
};

const Directory = function(name) {
  this.children = [];
  Component.call(this, name);
};

Directory.prototype = {
  add: function(child) {
    this.children.push(child);
  },
  remove: function(child) {
    const length = this.children.length;
    for (let i = 0; i < length; i++) {
      if (this.children[i] === child) {
        this.children.splice(i, 1);
        return;
      }
    }
  },
  getChild: function(i) {
    return this.children[i];
  },
  hasChildren: function() {
    return this.children.length > 0;
  }
};

function printDirectoryStructure(component, indent) {
  console.log(Array(indent++).join('--') + component.getName());
  if (component instanceof Directory) {
    for (let i = 0, length = component.children.length; i < length; i++) {
      printDirectoryStructure(component.getChild(i), indent);
    }
  }
}

const projectDirectory = new Directory('project');
const cssDirectory = new Directory('css');
const cssFile1 = new File('styles1.css');
const cssFile2 = new File('styles2.css');
cssDirectory.add(cssFile1);
cssDirectory.add(cssFile2);
const scriptDirectory = new Directory('js');
const scriptFile1 = new File('scripts1.js');
const scriptFile2 = new File('scripts2.js');
scriptDirectory.add(scriptFile1);
scriptDirectory.add(scriptFile2);
projectDirectory.add(cssDirectory);
projectDirectory.add(scriptDirectory);
printDirectoryStructure(projectDirectory, 1);
