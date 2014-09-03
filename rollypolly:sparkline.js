// Write your package code here!
Template.sparkline.created = function () {
	// ...
 Template.uuid=(!this.idprefix)?_.uniqueId("#spark"):this.idprefix;
 Template.compositedata=[];
 if(!_.isArray(this.datasource))
 	Meteor.Meteor.Error(500, 'Error 500: invalid datasource, array required',
 	 "sparklines require an array datasource!");
 _.map(this.datasource, function(value, key, this.datasource){
 	if(_.isArray(value))
 		Template.compositedata.push(value);
 });
Template.options=this.options;
 
};
Template.sparkline.helpers({
	sparkid: function () {
		// ...
		return Template.uuid;
	}
});

Template.sparkline.rendered = function () {
	// ...
	if(Template.compositedata.length>0)
	{
		
		_.map(Template.compositedata, function(value, key, Template.compositedata){
		
			// body
			$(Template.uuid).sparkline(value,_.extend(Template.options, {composite:true}))
		});
	}
	else
	{
		$(Template.uuid).sparkline(value,Template.options);
	}
	
	
};