"use client";
import clsx from "clsx";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "../ui/breadcrumb";
import { usePathname } from "next/navigation";
import React from "react";

export function BreadCrumbs() {
  const path = usePathname();
  const pathArray: { title: string; href: string }[] = path
    .split("/")
    .filter((p) => p !== "")
    .map((param) => {
      const title = param.replace("-", " ");
      return { title, href: `/${param}` };
    });

  return (
    <div className={clsx("py-3")}>
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          {pathArray.length > 1 && (
            <>
              {pathArray.slice(0, -1).map((crumb) => (
                <React.Fragment key={crumb.href}>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbLink className="capitalize" href={crumb.href}>
                      {crumb.title}
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                </React.Fragment>
              ))}
            </>
          )}

          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage className="capitalize">
              {pathArray[pathArray.length - 1]?.title}
            </BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  );
}
