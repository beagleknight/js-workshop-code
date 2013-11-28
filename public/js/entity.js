define(function () {
    var entity = function (spec) {
        var that = {},
            drawAxis = true;

        that.getX = function () {
            return spec.position.x;
        };
        
        that.getY = function () {
            return spec.position.y;
        };

        that.getVx = function () {
            return spec.velocity.x;
        };

        that.getVy = function () {
            return spec.velocity.y;
        };

        that.render = function (ctx) {
            var position = spec.position;

            if (drawAxis) {
                ctx.save();
                ctx.strokeStyle = "red";
                ctx.beginPath();
                ctx.moveTo(position.x, position.y);
                ctx.lineTo(position.x + 100, position.y);
                ctx.stroke();
                ctx.strokeStyle = "green";
                ctx.beginPath();
                ctx.moveTo(position.x, position.y);
                ctx.lineTo(position.x, position.y + 100);
                ctx.stroke();
                ctx.restore();
            }
        };

        that.update = function (dt) {
            spec.position.x += spec.velocity.x * dt / 1000;
            spec.position.y += spec.velocity.y * dt / 1000;
        };

        return that;
    };

    return entity;
});
