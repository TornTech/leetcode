/**
 * @param {number[]} rating
 * @return {number}
 */
var numTeams = function(rating) {
    let numberOfTeams = 0;
    let dp = new Array(rating.length).fill().map(() => new Array(2).fill(0));
    
    for (let i = 0; i < rating.length; i++) {
        for (let j = i+1; j < rating.length; j++) {
            if (rating[j] > rating[i]) {
                dp[j][0]++;
                numberOfTeams += dp[i][0];
            }
            
            if (rating[i] > rating[j]) {
                dp[j][1]++;
                numberOfTeams += dp[i][1];
            }
        }
    }
    
    return numberOfTeams;
};
