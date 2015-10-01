/* Generated by Opal 0.6.3 */
(function ($opal) {
    var $a, self = $opal.top, $scope = $opal, nil = $opal.nil, $breaker = $opal.breaker, $slice = $opal.slice, $klass = $opal.klass, $hash2 = $opal.hash2;

    if ($scope.RUBY_ENGINE['$==']("opal")) {
    }
    ;
    self.$include((($a = $opal.Object._scope.Asciidoctor) == null ? $opal.cm('Asciidoctor') : $a));
    return (function ($base, $super) {
        function $TreeBlock() {
        };
        var self = $TreeBlock = $klass($base, $super, 'TreeBlock', $TreeBlock);

        var def = self._proto, $scope = self._scope;

        self.$use_dsl();

        self.$named("tree");

        self.$on_context("open");

        self.$parse_content_as("literal");

        return (def.$process = function (parent, reader, attrs) {
                var $a, self = this;

                var type = (attrs['$[]']("type")),
                    title = (attrs['$[]']("title")),
                    filename = (attrs['$[]']("file")),
                    alt = (attrs['$[]']("alt")),
                    caption = (attrs['$[]']("caption")),
                    width = (attrs['$[]']("width")),
                    role = (attrs['$[]']("role")),
                    link = (attrs['$[]']("link")),
                    float = (attrs['$[]']("float")),
                    height = (attrs['$[]']("height")),
                    scale = (attrs['$[]']("scale")),
                    align = (attrs['$[]']("align")),
                    cache = (attrs['$[]']("cache")),
                    imagesdir = parent.$document().$attr('imagesdir', '');

                if (filename == "") {
                    return nil;
                }

                var targetUri = parent.$image_uri(filename);

                if (cache != "enabled") {
                    var readed = reader.$read();
                    if ((readed.match(/#/g) || []).length > (readed.match(/(-|\|)/g) || []).length)
                        afx.createFileTree(readed, type, imagesdir, targetUri, width, height);
                    else
                        afx.createHighlightFileTree(readed, type, imagesdir, targetUri, width, height);
                }

                if ((($a = (type['$==']("ascii"))) !== nil && (!$a._isBoolean || $a == true))) {
                    return self.$create_pass_block(parent, targetUri, attrs, $hash2(["subs"], {"subs": nil}))
                } else {

                    var attributes = {
                        "target": filename,
                        "title": title,
                        "alt": alt,
                        "caption": caption,
                        "width": width,
                        "height": height,
                        "scale": scale,
                        "align": align,
                        "role": role,
                        "link": link,
                        "float": float
                    };

                    return self.$create_image_block(parent, Opal.hash(attributes))
                }
                ;
            }, nil) && 'process';
    })(self, ($scope.Extensions)._scope.BlockProcessor);
})(Opal);
/* Generated by Opal 0.6.3 */
(function ($opal) {
    var $a, $b, TMP_1, self = $opal.top, $scope = $opal, nil = $opal.nil, $breaker = $opal.breaker, $slice = $opal.slice;

    if ($scope.RUBY_ENGINE['$==']("opal")) {
    }
    ;
    return ($a = ($b = $scope.Extensions).$register, $a
            .
            _p = (TMP_1 = function () {
                var self = TMP_1._s || this;

                return self.$block($scope.TreeBlock)
            }, TMP_1
                .
                _s = self, TMP_1
        ),
            $a
    ).
        call($b);
})(Opal);
