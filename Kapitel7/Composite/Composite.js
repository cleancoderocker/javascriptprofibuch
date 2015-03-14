(function() {

    var Component = function(name) {
        this.name = name;
        this.getName = function() {
            return this.name;
        }
    }

    var File = function (name) {
        Component.call(this, name);
    }

    var Directory = function (name) {
        this.children = [];
        Component.call(this, name);
    }

    Directory.prototype = {
        add: function (child) {
            this.children.push(child);
        },
        remove: function (child) {
            var length = this.children.length;
            for (var i = 0; i < length; i++) {
                if (this.children[i] === child) {
                    this.children.splice(i, 1);
                    return;
                }
            }
        },
        getChild: function (i) {
            return this.children[i];
        },
        hasChildren: function () {
            return this.children.length > 0;
        }
    }

    function printDirectoryStructure(component, indent) {
        console.log(Array(indent++).join("--") + component.getName());
        if(component instanceof Directory) {
            for (var i = 0, length = component.children.length; i < length; i++) {
                printDirectoryStructure(component.getChild(i), indent);
            }
        }
    }

    var projectDirectory = new Directory("project");
    var cssDirectory = new Directory("css");
    var cssFile1 = new File("styles1.css")
    var cssFile2 = new File("styles2.css");
    cssDirectory.add(cssFile1);
    cssDirectory.add(cssFile2);
    var scriptDirectory = new Directory("js");
    var scriptFile1 = new File("scripts1.js")
    var scriptFile2 = new File("scripts2.js");
    scriptDirectory.add(scriptFile1);
    scriptDirectory.add(scriptFile2);
    projectDirectory.add(cssDirectory);
    projectDirectory.add(scriptDirectory);
    printDirectoryStructure(projectDirectory, 1);
})();