define(['dojo/_base/declare', 'jimu/BaseWidget'],
  function(declare, BaseWidget) {
    //To create a widget, you need to derive from BaseWidget.
    return declare([BaseWidget], {
      // Custom widget code goes here

      baseClass: 'jimu-widget-Filtro',


      startup: function() {
      this.inherited(arguments);
      _layer = this.map.getLayer("Felicidad_2016_1798")

      },

      onOpen: function(){
      console.log(_layer);
      },

      _onClick:function(){

        console.log(this.map);

        texto = this.inputFiltrar.value;
        _layer.setDefinitionExpression("country = '" + texto + "'");

      },

      _onClickRank:function(){

        console.log(this.map);

        texto = this.inputFiltrarRank.value;
        _layer.setDefinitionExpression("Happiness_Rank = '" + texto + "'");

      },

      _onClickRestaurar:function(){
        _layer.setDefinitionExpression(_layer.defaultDefinitionExpression);

      },

    });
  });
