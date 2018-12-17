var itemid = new Array(4031036,4031037,4031038,4031711);
var mapid = new Array(103000900,103000903,103000906,600010004);
var menu;

function start() {
    status = -1;
    sw = cm.getEventManager("Subway");
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 0 && status ==1) {
	cm.dispose();
    } else {
	if (mode == 0) {
	    cm.sendNext("You must have some business to take care of here, right?");
	    cm.dispose();
	    return;
	}
	if (mode == 1)
	    status++;
	if (status == 0) {
	    if (cm.haveItem(itemid[0]) || cm.haveItem(itemid[1]) || cm.haveItem(itemid[2]) || cm.haveItem(itemid[3])) {
		status = 1;
	    } else {
		cm.sendNext("Here's the ticket reader. You are not allowed in without the ticket.");
		cm.dispose();
	    }
	} if (status == 1) {
	    menu = "Here's the ticket reader. You will be brought in immediately. Which ticket would like to use?\r\n";
	    for (i=0; i < itemid.length; i++) {
		if(cm.haveItem(itemid[i])) {
		    menu += "#L"+i+"##b#m"+mapid[i]+"##l\r\n";
		}
	    }
	    cm.sendSimple(menu);
	} if (status == 2) {
	    section = selection;
	    if(section < 3) {
		cm.gainItem(itemid[selection],-1);
		cm.warp(mapid[selection]);
		cm.dispose();
	    }
	    else {
		if(sw == null) {
		    cm.sendNext("Event error, please restart your server for solution");
		    cm.dispose();
		} else if(sw.getProperty("entry").equals("true")) {
		    cm.sendYesNo("It looks like there's plenty of room for this ride. Please have your ticket ready so I can let you in, The ride will be long, but you'll get to your destination just fine. What do you think? Do you want to get on this ride?");
		} else if(sw.getProperty("entry").equals("false") && sw.getProperty("docked").equals("true")) {
		    cm.sendNext("The subway is getting ready for takeoff. I'm sorry, but you'll have to get on the next ride. The ride schedule is available through the usher at the ticketing booth.");
		    cm.dispose();
		} else {
		    cm.sendNext("We will begin boarding 1 minutes before the takeoff. Please be patient and wait for a few minutes. Be aware that the subway will take off right on time, and we stop receiving tickets 1 minute before that, so please make sure to be here on time.");
		    cm.dispose();
		}
	    }
	} if (status == 3) {
	    cm.gainItem(itemid[section],-1);
	    cm.warp(mapid[section]);
	    cm.dispose();
	}
    }
}