import Skeleton from "@mui/material/Skeleton";
import React from 'react'
import { SkeletonStyle } from "./style";

export const SkeletonLoader =()=> {
    return (
       
        <SkeletonStyle>
              <div style={{ display: "flex", }}>
                <Skeleton className="Skeleton-style"
                  variant="rect"
                
                />
                <Skeleton className="Skeleton-style"
                  variant="rect"
                 
                />
                <Skeleton className="Skeleton-style"
                  variant="rect"
                  
                />
                <Skeleton className="Skeleton-style"
                  variant="rect"
                 
                />
              </div>
              </SkeletonStyle>
     
    );
  }
  