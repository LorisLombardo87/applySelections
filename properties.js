/*global define*/
define( [
	'jquery',
	'underscore',
	'qlik',
	'ng!$q',
	'ng!$http'
], function ( $, _, qlik, $q, $http ) {

	var app = qlik.currApp();

	// ****************************************************************************************
	// Helper Promises
	// ****************************************************************************************
	var getBookmarkList = function () {
		var defer = $q.defer();

		app.getList( 'BookmarkList', function ( items ) {
			defer.resolve( items.qBookmarkList.qItems.map( function ( item ) {
					return {
						value: item.qInfo.qId,
						label: item.qData.title
					}
				} )
			);
		} );
		return defer.promise;
	};

	// ****************************************************************************************
	// Other Settings
	// ****************************************************************************************

	var users1 = {
		ref: "props.rules.rule1.users",
		label: "Users",
		type: "string",
		expression: "",
		show: function( data ) {
			console.log('data',data);
			return data.props.rules.rule1.type === 'u';
		}
	};
	var bookmark1 = {
		type: "string",
		component: "dropdown",
		label: "Select Bookmark",
		ref: "props.rules.rule1.bookmark",
		options: function () {
			return getBookmarkList()
				.then( function ( items ) {
					return items;
				} );
		},
		show: true
	};
	var enable1 = {
		ref: "props.rules.rule1.enabled",
		label: "Enable Rule",
		type: "boolean",
		defaultValue: false
	};

	var type1 = {
		type: "string",
		component: "dropdown",
		label: "Type of Rule",
		ref: "props.rules.rule1.type",
		defaultValue: 'u',
		options: [{
				value: "u",
				label: "Define Users"
			}, 
			{
				value: "a",
				label: "All Users"
			}
		]
	};

	var users2 = {
		ref: "props.rules.rule2.users",
		label: "Users",
		type: "string",
		expression: "",
		show: true
	};
	var bookmark2 = {
		type: "string",
		component: "dropdown",
		label: "Select Bookmark",
		ref: "props.rules.rule2.bookmark",
		options: function () {
			return getBookmarkList()
				.then( function ( items ) {
					return items;
				} );
		},
		show: true
	};
	var enable2= {
		ref: "props.rules.rule2.enabled",
		label: "Enable Rule",
		type: "boolean",
		defaultValue: false
	};

	/////////////////////
	var users3 = {
		ref: "props.rules.rule3.users",
		label: "Users",
		type: "string",
		expression: "",
		show: true
	};
	var bookmark3 = {
		type: "string",
		component: "dropdown",
		label: "Select Bookmark",
		ref: "props.rules.rule3.bookmark",
		options: function () {
			return getBookmarkList()
				.then( function ( items ) {
					return items;
				} );
		},
		show: true
	};
	var enable3= {
		ref: "props.rules.rule3.enabled",
		label: "Enable Rule",
		type: "boolean",
		defaultValue: false
	};

	/////////////////////
	var users4 = {
		ref: "props.rules.rule4.users",
		label: "Users",
		type: "string",
		expression: "",
		show: true
	};
	var bookmark4 = {
		type: "string",
		component: "dropdown",
		label: "Select Bookmark",
		ref: "props.rules.rule4.bookmark",
		options: function () {
			return getBookmarkList()
				.then( function ( items ) {
					return items;
				} );
		},
		show: true
	};
	var enable4= {
		ref: "props.rules.rule4.enabled",
		label: "Enable Rule",
		type: "boolean",
		defaultValue: false
	};

	/////////////////////
	var users5 = {
		ref: "props.rules.rule5.users",
		label: "Users",
		type: "string",
		expression: "",
		show: true
	};
	var bookmark5 = {
		type: "string",
		component: "dropdown",
		label: "Select Bookmark",
		ref: "props.rules.rule5.bookmark",
		options: function () {
			return getBookmarkList()
				.then( function ( items ) {
					return items;
				} );
		},
		show: true
	};
	var enable5= {
		ref: "props.rules.rule5.enabled",
		label: "Enable Rule",
		type: "boolean",
		defaultValue: false
	};

	/////////////////////
	var users6 = {
		ref: "props.rules.rule6.users",
		label: "Users",
		type: "string",
		expression: "",
		show: true
	};
	var bookmark6 = {
		type: "string",
		component: "dropdown",
		label: "Select Bookmark",
		ref: "props.rules.rule6.bookmark",
		options: function () {
			return getBookmarkList()
				.then( function ( items ) {
					return items;
				} );
		},
		show: true
	};
	var enable6= {
		ref: "props.rules.rule6.enabled",
		label: "Enable Rule",
		type: "boolean",
		defaultValue: false
	};

	/////////////////////
	var users7 = {
		ref: "props.rules.rule7.users",
		label: "Users",
		type: "string",
		expression: "",
		show: true
	};
	var bookmark7 = {
		type: "string",
		component: "dropdown",
		label: "Select Bookmark",
		ref: "props.rules.rule7.bookmark",
		options: function () {
			return getBookmarkList()
				.then( function ( items ) {
					return items;
				} );
		},
		show: true
	};
	var enable7= {
		ref: "props.rules.rule7.enabled",
		label: "Enable Rule",
		type: "boolean",
		defaultValue: false
	};

	/////////////////////
	var users8 = {
		ref: "props.rules.rule8.users",
		label: "Users",
		type: "string",
		expression: "",
		show: true
	};
	var bookmark8 = {
		type: "string",
		component: "dropdown",
		label: "Select Bookmark",
		ref: "props.rules.rule8.bookmark",
		options: function () {
			return getBookmarkList()
				.then( function ( items ) {
					return items;
				} );
		},
		show: true
	};
	var enable8= {
		ref: "props.rules.rule8.enabled",
		label: "Enable Rule",
		type: "boolean",
		defaultValue: false
	};

	/////////////////////
	var users9 = {
		ref: "props.rules.rule9.users",
		label: "Users",
		type: "string",
		expression: "",
		show: true
	};
	var bookmark9 = {
		type: "string",
		component: "dropdown",
		label: "Select Bookmark",
		ref: "props.rules.rule9.bookmark",
		options: function () {
			return getBookmarkList()
				.then( function ( items ) {
					return items;
				} );
		},
		show: true
	};
	var enable9= {
		ref: "props.rules.rule9.enabled",
		label: "Enable Rule",
		type: "boolean",
		defaultValue: false
	};

	/////////////////////
	var users10 = {
		ref: "props.rules.rule10.users",
		label: "Users",
		type: "string",
		expression: "",
		show: true
	};
	var bookmark10 = {
		type: "string",
		component: "dropdown",
		label: "Select Bookmark",
		ref: "props.rules.rule10.bookmark",
		options: function () {
			return getBookmarkList()
				.then( function ( items ) {
					return items;
				} );
		},
		show: true
	};
	var enable10= {
		ref: "props.rules.rule10.enabled",
		label: "Enable Rule",
		type: "boolean",
		defaultValue: false
	};









	// ****************************************************************************************
	// Property Panel Definition
	// ****************************************************************************************

	// Appearance Panel
	var rulesPanel = {
		label: "Rules",
		component: "expandable-items",
		items: {
			rule1: {
				type: "items",
				label: "Rule1",
				items: {

					type1: type1,
					users1: users1,
					bookmark1: bookmark1,
					enable1: enable1
				}
			},
			rule2: {
				type: "items",
				label: "Rule2",
				items: {
					users2: users2,
					bookmark2: bookmark2,
					enable2: enable2
				}
			},
			rule3: {
				type: "items",
				label: "Rule3",
				items: {
					users3: users3,
					bookmark3: bookmark3,
					enable3: enable3
				}
			},
			rule4: {
				type: "items",
				label: "Rule4",
				items: {
					users4: users4,
					bookmark4: bookmark4,
					enable4: enable4
				}
			},
			rule5: {
				type: "items",
				label: "Rule5",
				items: {
					users5: users5,
					bookmark5: bookmark5,
					enable5: enable5
				}
			},
			rule6: {
				type: "items",
				label: "Rule6",
				items: {
					users6: users6,
					bookmark6: bookmark6,
					enable6: enable6
				}
			},
			rule7: {
				type: "items",
				label: "Rule7",
				items: {
					users7: users7,
					bookmark7: bookmark7,
					enable7: enable7
				}
			},
			rule8: {
				type: "items",
				label: "Rule8",
				items: {
					users8: users8,
					bookmark8: bookmark8,
					enable8: enable8
				}
			},
			rule9: {
				type: "items",
				label: "Rule9",
				items: {
					users9: users9,
					bookmark9: bookmark9,
					enable9: enable9
				}
			},
			rule10: {
				type: "items",
				label: "Rule10",
				items: {
					users10: users10,
					bookmark10: bookmark10,
					enable10: enable10
				}
			}

		}
	};

	// Appearance Panel
	var appearancePanel = {
		uses: "settings"
	};

	var prop =  {
		type: "items",
		component: "accordion",
		items: {
			rulesPanel: rulesPanel,
			appearancePanel: appearancePanel 

		}
	};
	// Return values
	return prop;

} );
