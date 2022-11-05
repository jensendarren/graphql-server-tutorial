function feed(parent, args, context) {
    return context.prisma.link.findMany()
}

function info() {
    return "Graph QL Server Tutorial";
}

module.exports = {
    feed,
    info
}