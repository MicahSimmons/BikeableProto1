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

g_post_db.push({
    id: '20',
    title: "Jennings Avenue Public Meeting",
    date: "March 2, 6:00pm",
    tags: ["news"],
    banner: '<img src="/assets/jennings.jpeg">',
    teaser: 'Please attend this important community meeting for Jennings Avenue!',
    body: '\
    On Thursday, March 2 at 6:00pm, Santa Rosa and SMART will hold a community meeting to discuss options for the proposed crossing of the SMART tracks at Jennings Avenue, near Coddingtown mall. \
    The city has already proposed an at-grade crossing that meets applicable safety standards, while SMART is trying to gain support for an overcrossing that it says is safer, but which is also significantly more costly and impactful to the surrounding neighborhood. (This article in the Press Democrat provides even more background.) \
    If you can, please attend and express support for an affordable and effective solution that closes this key gap in Santa Rosa’s active transportation network. \
    What: Support construction of a bike & ped crossing at Jennings Avenue \
    When: Thursday, March 2, 6:00pm \
    How: \
    In-person at Helen Lehman Elementary School, 1700 Jennings Avenue \
    Join via Zoom: https://sonomamarintrain-org.zoom.us/j/89903513421 \
    Call in: 1-699-900-9128, meeting ID# 899 0351 3421 \
    For more details, see the meeting notice here.    \
    '
})

g_post_db.push({
    id: '22',
    title: "Jennings Avenue Public Meeting",
    date: "March 2, 6:00pm",
    tags: ["news"],
    banner: '<img src="/assets/jennings.jpeg">',
    teaser: 'Please attend this important community meeting for Jennings Avenue!',
    body: '\
    On Thursday, March 2 at 6:00pm, Santa Rosa and SMART will hold a community meeting to discuss options for the proposed crossing of the SMART tracks at Jennings Avenue, near Coddingtown mall. \
    The city has already proposed an at-grade crossing that meets applicable safety standards, while SMART is trying to gain support for an overcrossing that it says is safer, but which is also significantly more costly and impactful to the surrounding neighborhood. (This article in the Press Democrat provides even more background.) \
    If you can, please attend and express support for an affordable and effective solution that closes this key gap in Santa Rosa’s active transportation network. \
    What: Support construction of a bike & ped crossing at Jennings Avenue \
    When: Thursday, March 2, 6:00pm \
    How: \
    In-person at Helen Lehman Elementary School, 1700 Jennings Avenue \
    Join via Zoom: https://sonomamarintrain-org.zoom.us/j/89903513421 \
    Call in: 1-699-900-9128, meeting ID# 899 0351 3421 \
    For more details, see the meeting notice here.    \
    '
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
