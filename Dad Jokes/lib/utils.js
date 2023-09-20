export function getRandomItem(replies, lastReply)
{
    const reply = replies[Math.floor(Math.random() * replies.length)];

    if(reply === lastReply)
        return getRandomItem(replies, lastReply);

    return reply;
}