class Component {
  constructor(name) {
    this._name = name;
  }

  get name() {
    return this._name;
  }
}

class File extends Component {}

class Directory extends Component {
  constructor(name) {
    super(name);
    this.children = [];
  }

  add(child) {
    this.children.push(child);
  }

  remove(child) {
    const length = this.children.length;
    for (let i = 0; i < length; i++) {
      if (this.children[i] === child) {
        this.children.splice(i, 1);
        return;
      }
    }
  }

  getChild(i) {
    return this.children[i];
  }

  hasChildren() {
    return this.children.length > 0;
  }
}

const printDirectoryStructure = (component, indent) => {
  console.log(Array(indent++).join('--') + component.name);
  if (component instanceof Directory) {
    for (let i = 0, length = component.children.length; i < length; i++) {
      printDirectoryStructure(component.getChild(i), indent);
    }
  }
};

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
