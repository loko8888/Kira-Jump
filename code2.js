gdjs.LeaderboardCode = {};
gdjs.LeaderboardCode.GDKiraObjects1= [];
gdjs.LeaderboardCode.GDKiraObjects2= [];
gdjs.LeaderboardCode.GDNewSpriteObjects1= [];
gdjs.LeaderboardCode.GDNewSpriteObjects2= [];
gdjs.LeaderboardCode.GDPlatformObjects1= [];
gdjs.LeaderboardCode.GDPlatformObjects2= [];
gdjs.LeaderboardCode.GDBoostObjects1= [];
gdjs.LeaderboardCode.GDBoostObjects2= [];
gdjs.LeaderboardCode.GDStartObjects1= [];
gdjs.LeaderboardCode.GDStartObjects2= [];
gdjs.LeaderboardCode.GDBGObjects1= [];
gdjs.LeaderboardCode.GDBGObjects2= [];
gdjs.LeaderboardCode.GDkiratextObjects1= [];
gdjs.LeaderboardCode.GDkiratextObjects2= [];
gdjs.LeaderboardCode.GD_9595KIRAObjects1= [];
gdjs.LeaderboardCode.GD_9595KIRAObjects2= [];
gdjs.LeaderboardCode.GDLeaderboardObjects1= [];
gdjs.LeaderboardCode.GDLeaderboardObjects2= [];
gdjs.LeaderboardCode.GDCongratzObjects1= [];
gdjs.LeaderboardCode.GDCongratzObjects2= [];
gdjs.LeaderboardCode.GDScoreObjects1= [];
gdjs.LeaderboardCode.GDScoreObjects2= [];
gdjs.LeaderboardCode.GDPlayerNameInputObjects1= [];
gdjs.LeaderboardCode.GDPlayerNameInputObjects2= [];
gdjs.LeaderboardCode.GDScore_9595BGObjects1= [];
gdjs.LeaderboardCode.GDScore_9595BGObjects2= [];
gdjs.LeaderboardCode.GDSubmitObjects1= [];
gdjs.LeaderboardCode.GDSubmitObjects2= [];
gdjs.LeaderboardCode.GDRetryObjects1= [];
gdjs.LeaderboardCode.GDRetryObjects2= [];
gdjs.LeaderboardCode.GDScoresObjects1= [];
gdjs.LeaderboardCode.GDScoresObjects2= [];
gdjs.LeaderboardCode.GDYour_9595highscoreObjects1= [];
gdjs.LeaderboardCode.GDYour_9595highscoreObjects2= [];
gdjs.LeaderboardCode.GDOverallObjects1= [];
gdjs.LeaderboardCode.GDOverallObjects2= [];
gdjs.LeaderboardCode.GDYour_9595nameObjects1= [];
gdjs.LeaderboardCode.GDYour_9595nameObjects2= [];


gdjs.LeaderboardCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Score"), gdjs.LeaderboardCode.GDScoreObjects1);
{for(var i = 0, len = gdjs.LeaderboardCode.GDScoreObjects1.length ;i < len;++i) {
    gdjs.LeaderboardCode.GDScoreObjects1[i].getBehavior("Text").setText("Score " + gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(11896300);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("PlayerNameInput"), gdjs.LeaderboardCode.GDPlayerNameInputObjects1);
{for(var i = 0, len = gdjs.LeaderboardCode.GDPlayerNameInputObjects1.length ;i < len;++i) {
    gdjs.LeaderboardCode.GDPlayerNameInputObjects1[i].getBehavior("Text").setText(gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1)));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Retry"), gdjs.LeaderboardCode.GDRetryObjects1);
gdjs.copyArray(runtimeScene.getObjects("Scores"), gdjs.LeaderboardCode.GDScoresObjects1);
gdjs.copyArray(runtimeScene.getObjects("Submit"), gdjs.LeaderboardCode.GDSubmitObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.LeaderboardCode.GDSubmitObjects1.length;i<l;++i) {
    if ( gdjs.LeaderboardCode.GDSubmitObjects1[i].getBehavior("ButtonFSM").IsHovered((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.LeaderboardCode.GDSubmitObjects1[k] = gdjs.LeaderboardCode.GDSubmitObjects1[i];
        ++k;
    }
}
gdjs.LeaderboardCode.GDSubmitObjects1.length = k;
for (var i = 0, k = 0, l = gdjs.LeaderboardCode.GDRetryObjects1.length;i<l;++i) {
    if ( gdjs.LeaderboardCode.GDRetryObjects1[i].getBehavior("ButtonFSM").IsHovered((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.LeaderboardCode.GDRetryObjects1[k] = gdjs.LeaderboardCode.GDRetryObjects1[i];
        ++k;
    }
}
gdjs.LeaderboardCode.GDRetryObjects1.length = k;
for (var i = 0, k = 0, l = gdjs.LeaderboardCode.GDScoresObjects1.length;i<l;++i) {
    if ( gdjs.LeaderboardCode.GDScoresObjects1[i].getBehavior("ButtonFSM").IsHovered((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.LeaderboardCode.GDScoresObjects1[k] = gdjs.LeaderboardCode.GDScoresObjects1[i];
        ++k;
    }
}
gdjs.LeaderboardCode.GDScoresObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.LeaderboardCode.GDRetryObjects1 */
/* Reuse gdjs.LeaderboardCode.GDScoresObjects1 */
/* Reuse gdjs.LeaderboardCode.GDSubmitObjects1 */
{for(var i = 0, len = gdjs.LeaderboardCode.GDSubmitObjects1.length ;i < len;++i) {
    gdjs.LeaderboardCode.GDSubmitObjects1[i].setOutlineEnabled(true);
}
for(var i = 0, len = gdjs.LeaderboardCode.GDRetryObjects1.length ;i < len;++i) {
    gdjs.LeaderboardCode.GDRetryObjects1[i].setOutlineEnabled(true);
}
for(var i = 0, len = gdjs.LeaderboardCode.GDScoresObjects1.length ;i < len;++i) {
    gdjs.LeaderboardCode.GDScoresObjects1[i].setOutlineEnabled(true);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Retry"), gdjs.LeaderboardCode.GDRetryObjects1);
gdjs.copyArray(runtimeScene.getObjects("Scores"), gdjs.LeaderboardCode.GDScoresObjects1);
gdjs.copyArray(runtimeScene.getObjects("Submit"), gdjs.LeaderboardCode.GDSubmitObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.LeaderboardCode.GDSubmitObjects1.length;i<l;++i) {
    if ( !(gdjs.LeaderboardCode.GDSubmitObjects1[i].getBehavior("ButtonFSM").IsHovered((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) ) {
        isConditionTrue_0 = true;
        gdjs.LeaderboardCode.GDSubmitObjects1[k] = gdjs.LeaderboardCode.GDSubmitObjects1[i];
        ++k;
    }
}
gdjs.LeaderboardCode.GDSubmitObjects1.length = k;
for (var i = 0, k = 0, l = gdjs.LeaderboardCode.GDRetryObjects1.length;i<l;++i) {
    if ( !(gdjs.LeaderboardCode.GDRetryObjects1[i].getBehavior("ButtonFSM").IsHovered((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) ) {
        isConditionTrue_0 = true;
        gdjs.LeaderboardCode.GDRetryObjects1[k] = gdjs.LeaderboardCode.GDRetryObjects1[i];
        ++k;
    }
}
gdjs.LeaderboardCode.GDRetryObjects1.length = k;
for (var i = 0, k = 0, l = gdjs.LeaderboardCode.GDScoresObjects1.length;i<l;++i) {
    if ( !(gdjs.LeaderboardCode.GDScoresObjects1[i].getBehavior("ButtonFSM").IsHovered((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) ) {
        isConditionTrue_0 = true;
        gdjs.LeaderboardCode.GDScoresObjects1[k] = gdjs.LeaderboardCode.GDScoresObjects1[i];
        ++k;
    }
}
gdjs.LeaderboardCode.GDScoresObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.LeaderboardCode.GDRetryObjects1 */
/* Reuse gdjs.LeaderboardCode.GDScoresObjects1 */
/* Reuse gdjs.LeaderboardCode.GDSubmitObjects1 */
{for(var i = 0, len = gdjs.LeaderboardCode.GDSubmitObjects1.length ;i < len;++i) {
    gdjs.LeaderboardCode.GDSubmitObjects1[i].setOutlineEnabled(false);
}
for(var i = 0, len = gdjs.LeaderboardCode.GDRetryObjects1.length ;i < len;++i) {
    gdjs.LeaderboardCode.GDRetryObjects1[i].setOutlineEnabled(false);
}
for(var i = 0, len = gdjs.LeaderboardCode.GDScoresObjects1.length ;i < len;++i) {
    gdjs.LeaderboardCode.GDScoresObjects1[i].setOutlineEnabled(false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Retry"), gdjs.LeaderboardCode.GDRetryObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.LeaderboardCode.GDRetryObjects1.length;i<l;++i) {
    if ( gdjs.LeaderboardCode.GDRetryObjects1[i].getBehavior("ButtonFSM").IsPressed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.LeaderboardCode.GDRetryObjects1[k] = gdjs.LeaderboardCode.GDRetryObjects1[i];
        ++k;
    }
}
gdjs.LeaderboardCode.GDRetryObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("PlayerNameInput"), gdjs.LeaderboardCode.GDPlayerNameInputObjects1);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "PlayZone", false);
}{gdjs.evtTools.leaderboards.savePlayerScore(runtimeScene, "ebcd7ecd-cd53-4498-9177-f90f59547324", gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)), (( gdjs.LeaderboardCode.GDPlayerNameInputObjects1.length === 0 ) ? "" :gdjs.LeaderboardCode.GDPlayerNameInputObjects1[0].getText()));
}{runtimeScene.getGame().getVariables().getFromIndex(1).setString((( gdjs.LeaderboardCode.GDPlayerNameInputObjects1.length === 0 ) ? "" :gdjs.LeaderboardCode.GDPlayerNameInputObjects1[0].getText()));
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Scores"), gdjs.LeaderboardCode.GDScoresObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.LeaderboardCode.GDScoresObjects1.length;i<l;++i) {
    if ( gdjs.LeaderboardCode.GDScoresObjects1[i].getBehavior("ButtonFSM").IsPressed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.LeaderboardCode.GDScoresObjects1[k] = gdjs.LeaderboardCode.GDScoresObjects1[i];
        ++k;
    }
}
gdjs.LeaderboardCode.GDScoresObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.leaderboards.displayLeaderboard(runtimeScene, "ebcd7ecd-cd53-4498-9177-f90f59547324", true);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.leaderboards.hasPlayerJustClosedLeaderboardView();
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "PlayZone", false);
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Kira"), gdjs.LeaderboardCode.GDKiraObjects1);
{for(var i = 0, len = gdjs.LeaderboardCode.GDKiraObjects1.length ;i < len;++i) {
    gdjs.LeaderboardCode.GDKiraObjects1[i].getBehavior("PlatformerObject").simulateJumpKey();
}
}}

}


};

gdjs.LeaderboardCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.LeaderboardCode.GDKiraObjects1.length = 0;
gdjs.LeaderboardCode.GDKiraObjects2.length = 0;
gdjs.LeaderboardCode.GDNewSpriteObjects1.length = 0;
gdjs.LeaderboardCode.GDNewSpriteObjects2.length = 0;
gdjs.LeaderboardCode.GDPlatformObjects1.length = 0;
gdjs.LeaderboardCode.GDPlatformObjects2.length = 0;
gdjs.LeaderboardCode.GDBoostObjects1.length = 0;
gdjs.LeaderboardCode.GDBoostObjects2.length = 0;
gdjs.LeaderboardCode.GDStartObjects1.length = 0;
gdjs.LeaderboardCode.GDStartObjects2.length = 0;
gdjs.LeaderboardCode.GDBGObjects1.length = 0;
gdjs.LeaderboardCode.GDBGObjects2.length = 0;
gdjs.LeaderboardCode.GDkiratextObjects1.length = 0;
gdjs.LeaderboardCode.GDkiratextObjects2.length = 0;
gdjs.LeaderboardCode.GD_9595KIRAObjects1.length = 0;
gdjs.LeaderboardCode.GD_9595KIRAObjects2.length = 0;
gdjs.LeaderboardCode.GDLeaderboardObjects1.length = 0;
gdjs.LeaderboardCode.GDLeaderboardObjects2.length = 0;
gdjs.LeaderboardCode.GDCongratzObjects1.length = 0;
gdjs.LeaderboardCode.GDCongratzObjects2.length = 0;
gdjs.LeaderboardCode.GDScoreObjects1.length = 0;
gdjs.LeaderboardCode.GDScoreObjects2.length = 0;
gdjs.LeaderboardCode.GDPlayerNameInputObjects1.length = 0;
gdjs.LeaderboardCode.GDPlayerNameInputObjects2.length = 0;
gdjs.LeaderboardCode.GDScore_9595BGObjects1.length = 0;
gdjs.LeaderboardCode.GDScore_9595BGObjects2.length = 0;
gdjs.LeaderboardCode.GDSubmitObjects1.length = 0;
gdjs.LeaderboardCode.GDSubmitObjects2.length = 0;
gdjs.LeaderboardCode.GDRetryObjects1.length = 0;
gdjs.LeaderboardCode.GDRetryObjects2.length = 0;
gdjs.LeaderboardCode.GDScoresObjects1.length = 0;
gdjs.LeaderboardCode.GDScoresObjects2.length = 0;
gdjs.LeaderboardCode.GDYour_9595highscoreObjects1.length = 0;
gdjs.LeaderboardCode.GDYour_9595highscoreObjects2.length = 0;
gdjs.LeaderboardCode.GDOverallObjects1.length = 0;
gdjs.LeaderboardCode.GDOverallObjects2.length = 0;
gdjs.LeaderboardCode.GDYour_9595nameObjects1.length = 0;
gdjs.LeaderboardCode.GDYour_9595nameObjects2.length = 0;

gdjs.LeaderboardCode.eventsList0(runtimeScene);

return;

}

gdjs['LeaderboardCode'] = gdjs.LeaderboardCode;
