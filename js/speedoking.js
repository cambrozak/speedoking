var SpeedoKing = (function (window, document, db) {

    var S = {},
      homePage = document.getElementById("homePage"),
      grid = document.getElementById("grid"),
      layout = document.getElementById("layout"),
      menu = document.getElementById("menu"),
      menuLink = document.getElementById("menuLink");

    toggleClass = function (element, className) {
        var classes = element.className.split(/\s+/),
            length = classes.length,
            i = 0;

        for(; i < length; i++) {
          if (classes[i] === className) {
            classes.splice(i, 1);
            break;
          }
        }
        // The className is not found
        if (length === classes.length) {
            classes.push(className);
        }

        element.className = classes.join(' ');
    };

    toggleMenu = function () {
        var active = 'active';
        toggleClass(layout, active);
        toggleClass(menu, active);
        toggleClass(menuLink, active);
    };

    menuLinkHome.onclick = function (e) {
        e.preventDefault();
        toggleMenu();
    };

    menuLink.onclick = function (e) {
        e.preventDefault();
        toggleMenu();
    };

    /**
     * Load home page
     */
    loadHome = function () {
      // hide grid
      grid.className += " hidden";
      
      // render home
      homePage.className = homePage.className.replace(/\s+hidden/g, ' ');
    };

    /**
     * Load the content grid
     * @param {array} section - Section from SpeedoKingDB
     * @example SpeedoKing.loadGrid(SpeedoKingDB.vespa.speedos.nos);
     */
    loadGrid = function (section) {
      var template = document.getElementById("grid-cell").innerHTML;

      // hide home
      homePage.className += " hidden";
      grid.className = grid.className.replace(/\s+hidden/g, ' ');

      // clear grid
      grid.innerHTML = "";

      // template substitutions
      template = template.replace(/<!--/g, '<').replace(/-->/g, '>');

      section.forEach(function (element, index, array) {
        var output = template;
        output = output.replace(/\{name\}/g, section[index].name);
        output = output.replace(/\{image\}/g, section[index].image);
        grid.innerHTML += output;  
      });

      return;
    };

    /** Initialize menu item */
    initMenuItem = function (id, section) {
      var element = document.getElementById(id), selectedClassName = "pure-menu-selected";

      element.addEventListener("click", function (e) {
        e.preventDefault();

        // toggle previously selected menu item off
        Array.prototype.forEach.call(document.getElementsByClassName(selectedClassName),
          function (element, index, array) { toggleClass(element, selectedClassName); });

        toggleClass(element, selectedClassName);

        if (id === "home") {
          loadHome();
        } else {
          loadGrid(section);
        }

        return;
      }, false);

      return;
    };

    /** Initialize menu */
    initMenu = function () {
      initMenuItem("home", []);

      initMenuItem("vwSpeedos", db.vw.speedos);
      initMenuItem("vwOdometers", db.vw.odometers);

      initMenuItem("vespaGrimstead", db.vespa.faceplates.grimstead);
      initMenuItem("vespaSpeedosNOS", db.vespa.speedos.nos);
      initMenuItem("vespaSpeedosRestored", db.vespa.speedos.restored);
      initMenuItem("vespaFaceplatesMPH", db.vespa.faceplates.mph);
      initMenuItem("vespaFaceplatesKm", db.vespa.faceplates.km);
      initMenuItem("vespaFaceplatesNovelty", db.vespa.faceplates.novelty);
      initMenuItem("vespaBezelsLensesGaskets", db.vespa.blg);

      initMenuItem("lambrettaSpeedosNew", db.lambretta.speedos.new);
      initMenuItem("lambrettaSpeedosNOS", db.lambretta.speedos.nos);
      initMenuItem("lambrettaSpeedosRestored", db.lambretta.speedos.restored);
      initMenuItem("lambrettaFaceplatesMPH", db.lambretta.faceplates.mph);
      initMenuItem("lambrettaFaceplatesKm", db.lambretta.faceplates.km);
      initMenuItem("lambrettaFaceplatesNovelty", db.lambretta.faceplates.novelty);
      initMenuItem("lambrettaBezelsLensesGaskets", db.lambretta.blg);
      return;
    };

    S.init = function () {
      initMenu();
      console.log("Initialized");
    };

    return S;

}(this, this.document, (this.SpeedoKingDB || {})));

SpeedoKing.init();
