/* ============================================================================
 * Copyright (c) Palo Alto Networks
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 * ========================================================================== */

import React from "react";

import sdk from "@paloaltonetworks/postman-collection";
import CodeSnippets from "@theme/ApiExplorer/CodeSnippets";
import Request from "@theme/ApiExplorer/Request";
import Response from "@theme/ApiExplorer/Response";
import { ApiItem } from "docusaurus-plugin-openapi-docs/src/types";

function ApiExplorer({
  item,
  infoPath,
}: {
  item: NonNullable<ApiItem>;
  infoPath: string;
}) {
  const postman = new sdk.Request(item.postman);

  return (
    <>
      <CodeSnippets
        postman={postman}
        codeSamples={(item as any)["x-code-samples"] ?? []}
      />
      <Request item={item} />
      <Response item={item} />
    </>
  );
}

export default ApiExplorer;
