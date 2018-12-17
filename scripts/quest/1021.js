/* Author: Xterminator (Modified by RMZero213)
	NPC Name: 		Roger
	Map(s): 		Maple Road : Lower level of the Training Camp (2)
	Description: 		Quest - Roger's Apple
*/
var status = -1;

function start(mode, type, selection) {
    if (mode == -1) {
	qm.dispose();
    } else {
	if (mode == 1)
	    status++;
	else
	    status--;
	
	if (status == 0) {
	    qm.sendNext("���o�I���ŶܡH�ڬO���U�s�ͪ��_�I�a�̪��Щx�A�ڪ��W�r�s��#p2000#�C");
	} else if (status == 1) {
	    qm.sendNextPrev("�A���֭n�ڰ��o�بƱ��ڡH�z������~�A���n�_���ٯu���ڡI�ܦn�ܦn~���O�ڦ��@�Q�n�����C");
	} else if (status == 2) {
	    qm.askAcceptDeclineNoESC("���K�ڴN�Ӷ}�Ӫ����a�I�x�r�I");
	} else if (status == 3) {
	   //qm.getPlayer().getStat().setHp(35);
	   //qm.updateSingleStat(qm.getMapleStat().HP, 35);
	    if (!qm.haveItem(2010007)) {
		qm.gainItem(2010007, 1);
		qm.forceStartQuest();
		qm.sendNext("�~��F�a�HHP�ܦ�0�i�O��j�ƩO�I��~��#r#t2010007##k�e���A�A�A�N�Y�U���a�I�A�|�R�����O��I�A�N�}�ҹD������A�A��n�ϥΪ��D���I��U�ƹ�����a�I#I");
		qm.getShowItemGain(2010007, 1);
	   }
	} else if (status == 4) {
	    qm.sendNextPrev("�O�o�n�ڧ⵹�A��#t2010007#�����Y����I���L�u�n�R��ʤ]�i�H�C�C����_HP�K��HP������_��A�A��ڻ��ܧa�I#I");
	} else if (status == 5) {
	    qm.ShowWZEffect("UI/tutorial.img/28");
	    qm.dispose();
	}
    }
}

function end(mode, type, selection) {
    if (mode == -1) {
	qm.dispose();
    } else {
	if (mode == 1)
	    status++;
	else
	    status--;
	if (status == 0) {
//	    if (qm.getPlayerStat("HP") < 50) {
//		qm.sendNext("Hey, your HP is not fully recovered yet. Did you take all the Roger's Apple that I gave you? Are you sure?");
//		qm.dispose();
//	    } else {
		qm.sendNext("�ϥιD��K�p��H��²��a�I�b�e���k�U�����W�A�٥i�H�]�m#b����#k��I�S�Q��a�H ����~");
//	    }
	} else if (status == 1) {
	    qm.sendNextPrev("�ܦn�I�ݨӧA�w�g�Ƿ|�F���֪F��K���ڴN�e��§�����A�a�I�p�G�Q�h�@�ɦU�a�Ȧ�A�o�i�O�����n�Ƿ|���A�ҥH�A���ӷP�E�ڰڡI�A�i�H�b�M�檺�ɭԨϥΡC");
	} else if (status == 2) {
	    qm.sendNextPrev("�گ�ЧA���]�N�즹����F�A�N��ı�o�̨̤��ˡA���]�٬O�n�D�O�F�I�O�o�n�`�N�ۤv�����I���K�A���o�I\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0#\r\n#v2010000# #t2010000# 3��\r\n#v2010009# #t2010009# 3��\r\n\r\n#fUI/UIWindow.img/QuestIcon/8/0# 10 exp");
	} else if (status == 3) {
	    qm.gainExp(10);
	    qm.gainItem(2010000, 3);
	    qm.gainItem(2010009, 3);
	    qm.forceCompleteQuest();
	    qm.dispose();
	}
    }
}