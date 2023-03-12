var g_post_db = [];
g_post_db.push({
    id: '10',
    title: "Hopper Avenue (Coffey Park) Public Meeting",
    date: "March 1, 5:30-7:00pm",
    tags: ["top"],
    banner: '<img src="/assets/action_alert.png">',
    teaser: 'Please attend this important community meeting for Coffey Park!',
    body: '<p>In November the city held an initial community meeting \
    to hear input on how it should spend PG&E settlement funds to \
    make improvements to Hopper Avenue in Coffey Park. \
    <p>Participants from Bikeable and others in the community made a strong appeal for improved bike and pedestrian infrastructure, along with other measures to calm traffic and ensure a more people-friendly street.<p>On Wednesday, March 1 at 5:30-7:00pm, the city will hold a second community meeting to present preliminary designs based on this input. If you can, please attend or submit a comment ahead of time to ensure high-quality bike and pedestrian facilities are at the center of the final design.<p>What: Support high-quality bike & ped facilities for the Hopper Avenue Corridor Improvement Project \
    <ul><li>When: Wednesday, March 1, 5:30-7:00pm</li> \
    <li>How:\
    <ul>  \
    <li>Join via Zoom: https://srcity-org.zoom.us/j/84953699844 </li> \
    <li>Call in: 1-833-548-0276, meeting ID# 849 5369 9844 </li> \
    <li>Email ahead of time: cbalanesi@srcity.org </li> \
    <li>Leave voicemail: 707-543-3914 </li> \
    </ul> \
    </li></ul> \
    <p>For more details, visit the project website at envisionhopper.com.'
})



export function GetTopList() {
    return g_post_db
            .filter((post) => post.tags.includes("top"))
            .map(post => post.id);
}

export function GetNewsList() {
    return g_post_db
            .filter((post) => post.tags.includes("news"))
            .map(post => post.id);
}

export function GetPost(post_id) {
    return g_post_db
            .filter((post) => post.id==post_id)
            [0];
}
