(module
  (type (;0;) (func (param i32 i32 i32) (result i32)))
  (type (;1;) (func (param i32 i32 i32)))
  (type (;2;) (func (param i32) (result i32)))
  (type (;3;) (func (param i32 i32 i32 i32) (result i32)))
  (type (;4;) (func (param i32 i32 i32 i32 i32)))
  (type (;5;) (func (param i32 f64 i32 i32 i32 i32) (result i32)))
  (type (;6;) (func))
  (type (;7;) (func (param i32 i32) (result i32)))
  (type (;8;) (func (param i32 i32)))
  (type (;9;) (func (param i32 i64 i32) (result i64)))
  (type (;10;) (func (param i32)))
  (type (;11;) (func (result i32)))
  (type (;12;) (func (param i32 i32 i32 i32)))
  (import "a" "a" (func (;0;) (type 3)))
  (import "a" "b" (func (;1;) (type 0)))
  (func (;2;) (type 4) (param i32 i32 i32 i32 i32)
    (local i32)
    global.get 0
    i32.const 256
    i32.sub
    local.tee 5
    global.set 0
    block  ;; label = @1
      local.get 4
      i32.const 73728
      i32.and
      br_if 0 (;@1;)
      local.get 2
      local.get 3
      i32.le_s
      br_if 0 (;@1;)
      local.get 5
      local.get 1
      i32.const 255
      i32.and
      local.get 2
      local.get 3
      i32.sub
      local.tee 2
      i32.const 256
      local.get 2
      i32.const 256
      i32.lt_u
      local.tee 1
      select
      call 7
      local.get 1
      i32.eqz
      if  ;; label = @2
        loop  ;; label = @3
          local.get 0
          local.get 5
          i32.const 256
          call 3
          local.get 2
          i32.const 256
          i32.sub
          local.tee 2
          i32.const 255
          i32.gt_u
          br_if 0 (;@3;)
        end
      end
      local.get 0
      local.get 5
      local.get 2
      call 3
    end
    local.get 5
    i32.const 256
    i32.add
    global.set 0)
  (func (;3;) (type 1) (param i32 i32 i32)
    (local i32 i32 i32 i32)
    local.get 0
    i32.load8_u
    i32.const 32
    i32.and
    i32.eqz
    if  ;; label = @1
      block  ;; label = @2
        local.get 2
        local.get 0
        local.tee 3
        i32.load offset=16
        local.tee 0
        if (result i32)  ;; label = @3
          local.get 0
        else
          block (result i32)  ;; label = @4
            local.get 3
            local.get 3
            i32.load8_u offset=74
            local.tee 0
            i32.const 1
            i32.sub
            local.get 0
            i32.or
            i32.store8 offset=74
            local.get 3
            i32.load
            local.tee 0
            i32.const 8
            i32.and
            if  ;; label = @5
              local.get 3
              local.get 0
              i32.const 32
              i32.or
              i32.store
              i32.const -1
              br 1 (;@4;)
            end
            local.get 3
            i64.const 0
            i64.store offset=4 align=4
            local.get 3
            local.get 3
            i32.load offset=44
            local.tee 0
            i32.store offset=28
            local.get 3
            local.get 0
            i32.store offset=20
            local.get 3
            local.get 0
            local.get 3
            i32.load offset=48
            i32.add
            i32.store offset=16
            i32.const 0
          end
          br_if 1 (;@2;)
          local.get 3
          i32.load offset=16
        end
        local.get 3
        i32.load offset=20
        local.tee 5
        i32.sub
        i32.gt_u
        if  ;; label = @3
          local.get 3
          local.get 1
          local.get 2
          local.get 3
          i32.load offset=36
          call_indirect (type 0)
          drop
          br 1 (;@2;)
        end
        block  ;; label = @3
          local.get 3
          i32.load8_s offset=75
          i32.const 0
          i32.lt_s
          br_if 0 (;@3;)
          local.get 2
          local.set 0
          loop  ;; label = @4
            local.get 0
            local.tee 4
            i32.eqz
            br_if 1 (;@3;)
            local.get 1
            local.get 4
            i32.const 1
            i32.sub
            local.tee 0
            i32.add
            i32.load8_u
            i32.const 10
            i32.ne
            br_if 0 (;@4;)
          end
          local.get 3
          local.get 1
          local.get 4
          local.get 3
          i32.load offset=36
          call_indirect (type 0)
          local.get 4
          i32.lt_u
          br_if 1 (;@2;)
          local.get 1
          local.get 4
          i32.add
          local.set 1
          local.get 2
          local.get 4
          i32.sub
          local.set 2
          local.get 3
          i32.load offset=20
          local.set 5
        end
        local.get 5
        local.set 0
        block  ;; label = @3
          local.get 2
          i32.const 512
          i32.ge_u
          if  ;; label = @4
            local.get 0
            local.get 1
            local.get 2
            call 1
            drop
            br 1 (;@3;)
          end
          local.get 0
          local.get 2
          i32.add
          local.set 4
          block  ;; label = @4
            local.get 0
            local.get 1
            i32.xor
            i32.const 3
            i32.and
            i32.eqz
            if  ;; label = @5
              block  ;; label = @6
                local.get 0
                i32.const 3
                i32.and
                i32.eqz
                br_if 0 (;@6;)
                local.get 2
                i32.const 1
                i32.lt_s
                br_if 0 (;@6;)
                loop  ;; label = @7
                  local.get 0
                  local.get 1
                  i32.load8_u
                  i32.store8
                  local.get 1
                  i32.const 1
                  i32.add
                  local.set 1
                  local.get 0
                  i32.const 1
                  i32.add
                  local.tee 0
                  i32.const 3
                  i32.and
                  i32.eqz
                  br_if 1 (;@6;)
                  local.get 0
                  local.get 4
                  i32.lt_u
                  br_if 0 (;@7;)
                end
              end
              block  ;; label = @6
                local.get 4
                i32.const -4
                i32.and
                local.tee 5
                i32.const 64
                i32.lt_u
                br_if 0 (;@6;)
                local.get 0
                local.get 5
                i32.const -64
                i32.add
                local.tee 6
                i32.gt_u
                br_if 0 (;@6;)
                loop  ;; label = @7
                  local.get 0
                  local.get 1
                  i32.load
                  i32.store
                  local.get 0
                  local.get 1
                  i32.load offset=4
                  i32.store offset=4
                  local.get 0
                  local.get 1
                  i32.load offset=8
                  i32.store offset=8
                  local.get 0
                  local.get 1
                  i32.load offset=12
                  i32.store offset=12
                  local.get 0
                  local.get 1
                  i32.load offset=16
                  i32.store offset=16
                  local.get 0
                  local.get 1
                  i32.load offset=20
                  i32.store offset=20
                  local.get 0
                  local.get 1
                  i32.load offset=24
                  i32.store offset=24
                  local.get 0
                  local.get 1
                  i32.load offset=28
                  i32.store offset=28
                  local.get 0
                  local.get 1
                  i32.load offset=32
                  i32.store offset=32
                  local.get 0
                  local.get 1
                  i32.load offset=36
                  i32.store offset=36
                  local.get 0
                  local.get 1
                  i32.load offset=40
                  i32.store offset=40
                  local.get 0
                  local.get 1
                  i32.load offset=44
                  i32.store offset=44
                  local.get 0
                  local.get 1
                  i32.load offset=48
                  i32.store offset=48
                  local.get 0
                  local.get 1
                  i32.load offset=52
                  i32.store offset=52
                  local.get 0
                  local.get 1
                  i32.load offset=56
                  i32.store offset=56
                  local.get 0
                  local.get 1
                  i32.load offset=60
                  i32.store offset=60
                  local.get 1
                  i32.const -64
                  i32.sub
                  local.set 1
                  local.get 0
                  i32.const -64
                  i32.sub
                  local.tee 0
                  local.get 6
                  i32.le_u
                  br_if 0 (;@7;)
                end
              end
              local.get 0
              local.get 5
              i32.ge_u
              br_if 1 (;@4;)
              loop  ;; label = @6
                local.get 0
                local.get 1
                i32.load
                i32.store
                local.get 1
                i32.const 4
                i32.add
                local.set 1
                local.get 0
                i32.const 4
                i32.add
                local.tee 0
                local.get 5
                i32.lt_u
                br_if 0 (;@6;)
              end
              br 1 (;@4;)
            end
            local.get 4
            i32.const 4
            i32.lt_u
            br_if 0 (;@4;)
            local.get 0
            local.get 4
            i32.const 4
            i32.sub
            local.tee 5
            i32.gt_u
            br_if 0 (;@4;)
            loop  ;; label = @5
              local.get 0
              local.get 1
              i32.load8_u
              i32.store8
              local.get 0
              local.get 1
              i32.load8_u offset=1
              i32.store8 offset=1
              local.get 0
              local.get 1
              i32.load8_u offset=2
              i32.store8 offset=2
              local.get 0
              local.get 1
              i32.load8_u offset=3
              i32.store8 offset=3
              local.get 1
              i32.const 4
              i32.add
              local.set 1
              local.get 0
              i32.const 4
              i32.add
              local.tee 0
              local.get 5
              i32.le_u
              br_if 0 (;@5;)
            end
          end
          local.get 0
          local.get 4
          i32.lt_u
          if  ;; label = @4
            loop  ;; label = @5
              local.get 0
              local.get 1
              i32.load8_u
              i32.store8
              local.get 1
              i32.const 1
              i32.add
              local.set 1
              local.get 0
              i32.const 1
              i32.add
              local.tee 0
              local.get 4
              i32.ne
              br_if 0 (;@5;)
            end
          end
        end
        local.get 3
        local.get 3
        i32.load offset=20
        local.get 2
        i32.add
        i32.store offset=20
      end
    end)
  (func (;4;) (type 3) (param i32 i32 i32 i32) (result i32)
    (local i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i64 i64)
    global.get 0
    i32.const 80
    i32.sub
    local.tee 6
    global.set 0
    local.get 6
    i32.const 1034
    i32.store offset=76
    local.get 6
    i32.const 55
    i32.add
    local.set 19
    local.get 6
    i32.const 56
    i32.add
    local.set 16
    block  ;; label = @1
      loop  ;; label = @2
        block  ;; label = @3
          local.get 14
          i32.const 0
          i32.lt_s
          br_if 0 (;@3;)
          i32.const 2147483647
          local.get 14
          i32.sub
          local.get 4
          i32.lt_s
          if  ;; label = @4
            i32.const 1936
            i32.const 61
            i32.store
            i32.const -1
            local.set 14
            br 1 (;@3;)
          end
          local.get 4
          local.get 14
          i32.add
          local.set 14
        end
        local.get 6
        i32.load offset=76
        local.tee 7
        local.set 4
        block  ;; label = @3
          block  ;; label = @4
            block  ;; label = @5
              local.get 7
              i32.load8_u
              local.tee 5
              if  ;; label = @6
                loop  ;; label = @7
                  block  ;; label = @8
                    block  ;; label = @9
                      local.get 5
                      i32.const 255
                      i32.and
                      local.tee 5
                      i32.eqz
                      if  ;; label = @10
                        local.get 4
                        local.set 5
                        br 1 (;@9;)
                      end
                      local.get 5
                      i32.const 37
                      i32.ne
                      br_if 1 (;@8;)
                      local.get 4
                      local.set 5
                      loop  ;; label = @10
                        local.get 4
                        i32.load8_u offset=1
                        i32.const 37
                        i32.ne
                        br_if 1 (;@9;)
                        local.get 6
                        local.get 4
                        i32.const 2
                        i32.add
                        local.tee 9
                        i32.store offset=76
                        local.get 5
                        i32.const 1
                        i32.add
                        local.set 5
                        local.get 4
                        i32.load8_u offset=2
                        local.set 8
                        local.get 9
                        local.set 4
                        local.get 8
                        i32.const 37
                        i32.eq
                        br_if 0 (;@10;)
                      end
                    end
                    local.get 5
                    local.get 7
                    i32.sub
                    local.set 4
                    local.get 0
                    if  ;; label = @9
                      local.get 0
                      local.get 7
                      local.get 4
                      call 3
                    end
                    local.get 4
                    br_if 6 (;@2;)
                    i32.const -1
                    local.set 15
                    i32.const 1
                    local.set 5
                    local.get 6
                    i32.load offset=76
                    local.set 4
                    block  ;; label = @9
                      local.get 6
                      i32.load offset=76
                      i32.load8_s offset=1
                      i32.const 48
                      i32.sub
                      i32.const 10
                      i32.ge_u
                      br_if 0 (;@9;)
                      local.get 4
                      i32.load8_u offset=2
                      i32.const 36
                      i32.ne
                      br_if 0 (;@9;)
                      local.get 4
                      i32.load8_s offset=1
                      i32.const 48
                      i32.sub
                      local.set 15
                      i32.const 1
                      local.set 17
                      i32.const 3
                      local.set 5
                    end
                    local.get 6
                    local.get 4
                    local.get 5
                    i32.add
                    local.tee 4
                    i32.store offset=76
                    i32.const 0
                    local.set 10
                    block  ;; label = @9
                      local.get 4
                      i32.load8_s
                      local.tee 12
                      i32.const 32
                      i32.sub
                      local.tee 9
                      i32.const 31
                      i32.gt_u
                      if  ;; label = @10
                        local.get 4
                        local.set 5
                        br 1 (;@9;)
                      end
                      local.get 4
                      local.set 5
                      i32.const 1
                      local.get 9
                      i32.shl
                      local.tee 9
                      i32.const 75913
                      i32.and
                      i32.eqz
                      br_if 0 (;@9;)
                      loop  ;; label = @10
                        local.get 6
                        local.get 4
                        i32.const 1
                        i32.add
                        local.tee 5
                        i32.store offset=76
                        local.get 9
                        local.get 10
                        i32.or
                        local.set 10
                        local.get 4
                        i32.load8_s offset=1
                        local.tee 12
                        i32.const 32
                        i32.sub
                        local.tee 9
                        i32.const 32
                        i32.ge_u
                        br_if 1 (;@9;)
                        local.get 5
                        local.set 4
                        i32.const 1
                        local.get 9
                        i32.shl
                        local.tee 9
                        i32.const 75913
                        i32.and
                        br_if 0 (;@10;)
                      end
                    end
                    block  ;; label = @9
                      local.get 12
                      i32.const 42
                      i32.eq
                      if  ;; label = @10
                        local.get 6
                        block (result i32)  ;; label = @11
                          block  ;; label = @12
                            local.get 5
                            i32.load8_s offset=1
                            i32.const 48
                            i32.sub
                            i32.const 10
                            i32.ge_u
                            br_if 0 (;@12;)
                            local.get 6
                            i32.load offset=76
                            local.tee 4
                            i32.load8_u offset=2
                            i32.const 36
                            i32.ne
                            br_if 0 (;@12;)
                            local.get 4
                            i32.load8_s offset=1
                            i32.const 2
                            i32.shl
                            local.get 3
                            i32.add
                            i32.const 192
                            i32.sub
                            i32.const 10
                            i32.store
                            local.get 4
                            i32.load8_s offset=1
                            i32.const 3
                            i32.shl
                            local.get 2
                            i32.add
                            i32.const 384
                            i32.sub
                            i32.load
                            local.set 11
                            i32.const 1
                            local.set 17
                            local.get 4
                            i32.const 3
                            i32.add
                            br 1 (;@11;)
                          end
                          local.get 17
                          br_if 6 (;@5;)
                          i32.const 0
                          local.set 17
                          i32.const 0
                          local.set 11
                          local.get 0
                          if  ;; label = @12
                            local.get 1
                            local.get 1
                            i32.load
                            local.tee 4
                            i32.const 4
                            i32.add
                            i32.store
                            local.get 4
                            i32.load
                            local.set 11
                          end
                          local.get 6
                          i32.load offset=76
                          i32.const 1
                          i32.add
                        end
                        local.tee 4
                        i32.store offset=76
                        local.get 11
                        i32.const -1
                        i32.gt_s
                        br_if 1 (;@9;)
                        i32.const 0
                        local.get 11
                        i32.sub
                        local.set 11
                        local.get 10
                        i32.const 8192
                        i32.or
                        local.set 10
                        br 1 (;@9;)
                      end
                      local.get 6
                      i32.const 76
                      i32.add
                      call 9
                      local.tee 11
                      i32.const 0
                      i32.lt_s
                      br_if 4 (;@5;)
                      local.get 6
                      i32.load offset=76
                      local.set 4
                    end
                    i32.const -1
                    local.set 8
                    block  ;; label = @9
                      local.get 4
                      i32.load8_u
                      i32.const 46
                      i32.ne
                      br_if 0 (;@9;)
                      local.get 4
                      i32.load8_u offset=1
                      i32.const 42
                      i32.eq
                      if  ;; label = @10
                        block  ;; label = @11
                          local.get 4
                          i32.load8_s offset=2
                          i32.const 48
                          i32.sub
                          i32.const 10
                          i32.ge_u
                          br_if 0 (;@11;)
                          local.get 6
                          i32.load offset=76
                          local.tee 4
                          i32.load8_u offset=3
                          i32.const 36
                          i32.ne
                          br_if 0 (;@11;)
                          local.get 4
                          i32.load8_s offset=2
                          i32.const 2
                          i32.shl
                          local.get 3
                          i32.add
                          i32.const 192
                          i32.sub
                          i32.const 10
                          i32.store
                          local.get 4
                          i32.load8_s offset=2
                          i32.const 3
                          i32.shl
                          local.get 2
                          i32.add
                          i32.const 384
                          i32.sub
                          i32.load
                          local.set 8
                          local.get 6
                          local.get 4
                          i32.const 4
                          i32.add
                          local.tee 4
                          i32.store offset=76
                          br 2 (;@9;)
                        end
                        local.get 17
                        br_if 5 (;@5;)
                        local.get 0
                        if (result i32)  ;; label = @11
                          local.get 1
                          local.get 1
                          i32.load
                          local.tee 4
                          i32.const 4
                          i32.add
                          i32.store
                          local.get 4
                          i32.load
                        else
                          i32.const 0
                        end
                        local.set 8
                        local.get 6
                        local.get 6
                        i32.load offset=76
                        i32.const 2
                        i32.add
                        local.tee 4
                        i32.store offset=76
                        br 1 (;@9;)
                      end
                      local.get 6
                      local.get 4
                      i32.const 1
                      i32.add
                      i32.store offset=76
                      local.get 6
                      i32.const 76
                      i32.add
                      call 9
                      local.set 8
                      local.get 6
                      i32.load offset=76
                      local.set 4
                    end
                    i32.const 0
                    local.set 5
                    loop  ;; label = @9
                      local.get 5
                      local.set 18
                      i32.const -1
                      local.set 13
                      local.get 4
                      i32.load8_s
                      i32.const 65
                      i32.sub
                      i32.const 57
                      i32.gt_u
                      br_if 8 (;@1;)
                      local.get 6
                      local.get 4
                      i32.const 1
                      i32.add
                      local.tee 12
                      i32.store offset=76
                      local.get 4
                      i32.load8_s
                      local.set 5
                      local.get 12
                      local.set 4
                      local.get 5
                      local.get 18
                      i32.const 58
                      i32.mul
                      i32.add
                      i32.load8_u offset=1007
                      local.tee 5
                      i32.const 1
                      i32.sub
                      i32.const 8
                      i32.lt_u
                      br_if 0 (;@9;)
                    end
                    block  ;; label = @9
                      block  ;; label = @10
                        local.get 5
                        i32.const 19
                        i32.ne
                        if  ;; label = @11
                          local.get 5
                          i32.eqz
                          br_if 10 (;@1;)
                          local.get 15
                          i32.const 0
                          i32.ge_s
                          if  ;; label = @12
                            local.get 3
                            local.get 15
                            i32.const 2
                            i32.shl
                            i32.add
                            local.get 5
                            i32.store
                            local.get 6
                            local.get 2
                            local.get 15
                            i32.const 3
                            i32.shl
                            i32.add
                            i64.load
                            i64.store offset=64
                            br 2 (;@10;)
                          end
                          local.get 0
                          i32.eqz
                          br_if 8 (;@3;)
                          local.get 6
                          i32.const -64
                          i32.sub
                          local.get 5
                          local.get 1
                          call 8
                          local.get 6
                          i32.load offset=76
                          local.set 12
                          br 2 (;@9;)
                        end
                        local.get 15
                        i32.const -1
                        i32.gt_s
                        br_if 9 (;@1;)
                      end
                      i32.const 0
                      local.set 4
                      local.get 0
                      i32.eqz
                      br_if 7 (;@2;)
                    end
                    local.get 10
                    i32.const -65537
                    i32.and
                    local.tee 9
                    local.get 10
                    local.get 10
                    i32.const 8192
                    i32.and
                    select
                    local.set 5
                    i32.const 0
                    local.set 13
                    i32.const 1024
                    local.set 15
                    local.get 16
                    local.set 10
                    block  ;; label = @9
                      block  ;; label = @10
                        block  ;; label = @11
                          block (result i32)  ;; label = @12
                            block  ;; label = @13
                              block  ;; label = @14
                                block  ;; label = @15
                                  block  ;; label = @16
                                    block (result i32)  ;; label = @17
                                      block  ;; label = @18
                                        block  ;; label = @19
                                          block  ;; label = @20
                                            block  ;; label = @21
                                              block  ;; label = @22
                                                block  ;; label = @23
                                                  block  ;; label = @24
                                                    local.get 12
                                                    i32.const 1
                                                    i32.sub
                                                    i32.load8_s
                                                    local.tee 4
                                                    i32.const -33
                                                    i32.and
                                                    local.get 4
                                                    local.get 4
                                                    i32.const 15
                                                    i32.and
                                                    i32.const 3
                                                    i32.eq
                                                    select
                                                    local.get 4
                                                    local.get 18
                                                    select
                                                    local.tee 4
                                                    i32.const 88
                                                    i32.sub
                                                    br_table 4 (;@20;) 20 (;@4;) 20 (;@4;) 20 (;@4;) 20 (;@4;) 20 (;@4;) 20 (;@4;) 20 (;@4;) 20 (;@4;) 14 (;@10;) 20 (;@4;) 15 (;@9;) 6 (;@18;) 14 (;@10;) 14 (;@10;) 14 (;@10;) 20 (;@4;) 6 (;@18;) 20 (;@4;) 20 (;@4;) 20 (;@4;) 20 (;@4;) 2 (;@22;) 5 (;@19;) 3 (;@21;) 20 (;@4;) 20 (;@4;) 9 (;@15;) 20 (;@4;) 1 (;@23;) 20 (;@4;) 20 (;@4;) 4 (;@20;) 0 (;@24;)
                                                  end
                                                  block  ;; label = @24
                                                    local.get 4
                                                    i32.const 65
                                                    i32.sub
                                                    br_table 14 (;@10;) 20 (;@4;) 11 (;@13;) 20 (;@4;) 14 (;@10;) 14 (;@10;) 14 (;@10;) 0 (;@24;)
                                                  end
                                                  local.get 4
                                                  i32.const 83
                                                  i32.eq
                                                  br_if 9 (;@14;)
                                                  br 19 (;@4;)
                                                end
                                                local.get 6
                                                i64.load offset=64
                                                local.set 20
                                                i32.const 1024
                                                br 5 (;@17;)
                                              end
                                              i32.const 0
                                              local.set 4
                                              block  ;; label = @22
                                                block  ;; label = @23
                                                  block  ;; label = @24
                                                    block  ;; label = @25
                                                      block  ;; label = @26
                                                        block  ;; label = @27
                                                          block  ;; label = @28
                                                            local.get 18
                                                            i32.const 255
                                                            i32.and
                                                            br_table 0 (;@28;) 1 (;@27;) 2 (;@26;) 3 (;@25;) 4 (;@24;) 26 (;@2;) 5 (;@23;) 6 (;@22;) 26 (;@2;)
                                                          end
                                                          local.get 6
                                                          i32.load offset=64
                                                          local.get 14
                                                          i32.store
                                                          br 25 (;@2;)
                                                        end
                                                        local.get 6
                                                        i32.load offset=64
                                                        local.get 14
                                                        i32.store
                                                        br 24 (;@2;)
                                                      end
                                                      local.get 6
                                                      i32.load offset=64
                                                      local.get 14
                                                      i64.extend_i32_s
                                                      i64.store
                                                      br 23 (;@2;)
                                                    end
                                                    local.get 6
                                                    i32.load offset=64
                                                    local.get 14
                                                    i32.store16
                                                    br 22 (;@2;)
                                                  end
                                                  local.get 6
                                                  i32.load offset=64
                                                  local.get 14
                                                  i32.store8
                                                  br 21 (;@2;)
                                                end
                                                local.get 6
                                                i32.load offset=64
                                                local.get 14
                                                i32.store
                                                br 20 (;@2;)
                                              end
                                              local.get 6
                                              i32.load offset=64
                                              local.get 14
                                              i64.extend_i32_s
                                              i64.store
                                              br 19 (;@2;)
                                            end
                                            local.get 8
                                            i32.const 8
                                            local.get 8
                                            i32.const 8
                                            i32.gt_u
                                            select
                                            local.set 8
                                            local.get 5
                                            i32.const 8
                                            i32.or
                                            local.set 5
                                            i32.const 120
                                            local.set 4
                                          end
                                          local.get 16
                                          local.set 7
                                          local.get 4
                                          i32.const 32
                                          i32.and
                                          local.set 9
                                          local.get 6
                                          i64.load offset=64
                                          local.tee 20
                                          i64.eqz
                                          i32.eqz
                                          if  ;; label = @20
                                            loop  ;; label = @21
                                              local.get 7
                                              i32.const 1
                                              i32.sub
                                              local.tee 7
                                              local.get 20
                                              i32.wrap_i64
                                              i32.const 15
                                              i32.and
                                              i32.const 1536
                                              i32.add
                                              i32.load8_u
                                              local.get 9
                                              i32.or
                                              i32.store8
                                              local.get 20
                                              i64.const 15
                                              i64.gt_u
                                              local.set 12
                                              local.get 20
                                              i64.const 4
                                              i64.shr_u
                                              local.set 20
                                              local.get 12
                                              br_if 0 (;@21;)
                                            end
                                          end
                                          local.get 6
                                          i64.load offset=64
                                          i64.eqz
                                          br_if 3 (;@16;)
                                          local.get 5
                                          i32.const 8
                                          i32.and
                                          i32.eqz
                                          br_if 3 (;@16;)
                                          local.get 4
                                          i32.const 4
                                          i32.shr_u
                                          i32.const 1024
                                          i32.add
                                          local.set 15
                                          i32.const 2
                                          local.set 13
                                          br 3 (;@16;)
                                        end
                                        local.get 16
                                        local.set 4
                                        local.get 6
                                        i64.load offset=64
                                        local.tee 20
                                        i64.eqz
                                        i32.eqz
                                        if  ;; label = @19
                                          loop  ;; label = @20
                                            local.get 4
                                            i32.const 1
                                            i32.sub
                                            local.tee 4
                                            local.get 20
                                            i32.wrap_i64
                                            i32.const 7
                                            i32.and
                                            i32.const 48
                                            i32.or
                                            i32.store8
                                            local.get 20
                                            i64.const 7
                                            i64.gt_u
                                            local.set 7
                                            local.get 20
                                            i64.const 3
                                            i64.shr_u
                                            local.set 20
                                            local.get 7
                                            br_if 0 (;@20;)
                                          end
                                        end
                                        local.get 4
                                        local.set 7
                                        local.get 5
                                        i32.const 8
                                        i32.and
                                        i32.eqz
                                        br_if 2 (;@16;)
                                        local.get 8
                                        local.get 16
                                        local.get 7
                                        i32.sub
                                        local.tee 4
                                        i32.const 1
                                        i32.add
                                        local.get 4
                                        local.get 8
                                        i32.lt_s
                                        select
                                        local.set 8
                                        br 2 (;@16;)
                                      end
                                      local.get 6
                                      i64.load offset=64
                                      local.tee 20
                                      i64.const -1
                                      i64.le_s
                                      if  ;; label = @18
                                        local.get 6
                                        i64.const 0
                                        local.get 20
                                        i64.sub
                                        local.tee 20
                                        i64.store offset=64
                                        i32.const 1
                                        local.set 13
                                        i32.const 1024
                                        br 1 (;@17;)
                                      end
                                      local.get 5
                                      i32.const 2048
                                      i32.and
                                      if  ;; label = @18
                                        i32.const 1
                                        local.set 13
                                        i32.const 1025
                                        br 1 (;@17;)
                                      end
                                      i32.const 1026
                                      i32.const 1024
                                      local.get 5
                                      i32.const 1
                                      i32.and
                                      local.tee 13
                                      select
                                    end
                                    local.set 15
                                    local.get 16
                                    local.set 4
                                    block  ;; label = @17
                                      local.get 20
                                      i64.const 4294967296
                                      i64.lt_u
                                      if  ;; label = @18
                                        local.get 20
                                        local.set 21
                                        br 1 (;@17;)
                                      end
                                      loop  ;; label = @18
                                        local.get 4
                                        i32.const 1
                                        i32.sub
                                        local.tee 4
                                        local.get 20
                                        local.get 20
                                        i64.const 10
                                        i64.div_u
                                        local.tee 21
                                        i64.const 10
                                        i64.mul
                                        i64.sub
                                        i32.wrap_i64
                                        i32.const 48
                                        i32.or
                                        i32.store8
                                        local.get 20
                                        i64.const 42949672959
                                        i64.gt_u
                                        local.set 7
                                        local.get 21
                                        local.set 20
                                        local.get 7
                                        br_if 0 (;@18;)
                                      end
                                    end
                                    local.get 21
                                    i32.wrap_i64
                                    local.tee 7
                                    if  ;; label = @17
                                      loop  ;; label = @18
                                        local.get 4
                                        i32.const 1
                                        i32.sub
                                        local.tee 4
                                        local.get 7
                                        local.get 7
                                        i32.const 10
                                        i32.div_u
                                        local.tee 9
                                        i32.const 10
                                        i32.mul
                                        i32.sub
                                        i32.const 48
                                        i32.or
                                        i32.store8
                                        local.get 7
                                        i32.const 9
                                        i32.gt_u
                                        local.set 12
                                        local.get 9
                                        local.set 7
                                        local.get 12
                                        br_if 0 (;@18;)
                                      end
                                    end
                                    local.get 4
                                    local.set 7
                                  end
                                  local.get 5
                                  i32.const -65537
                                  i32.and
                                  local.get 5
                                  local.get 8
                                  i32.const -1
                                  i32.gt_s
                                  select
                                  local.set 5
                                  block  ;; label = @16
                                    local.get 6
                                    i64.load offset=64
                                    local.tee 20
                                    i64.const 0
                                    i64.ne
                                    br_if 0 (;@16;)
                                    local.get 8
                                    br_if 0 (;@16;)
                                    i32.const 0
                                    local.set 8
                                    local.get 16
                                    local.set 7
                                    br 12 (;@4;)
                                  end
                                  local.get 8
                                  local.get 20
                                  i64.eqz
                                  local.get 16
                                  local.get 7
                                  i32.sub
                                  i32.add
                                  local.tee 4
                                  local.get 4
                                  local.get 8
                                  i32.lt_s
                                  select
                                  local.set 8
                                  br 11 (;@4;)
                                end
                                block (result i32)  ;; label = @15
                                  local.get 8
                                  local.tee 4
                                  i32.const 0
                                  i32.ne
                                  local.set 10
                                  block  ;; label = @16
                                    block  ;; label = @17
                                      block  ;; label = @18
                                        local.get 6
                                        i32.load offset=64
                                        local.tee 5
                                        i32.const 1051
                                        local.get 5
                                        select
                                        local.tee 7
                                        local.tee 5
                                        i32.const 3
                                        i32.and
                                        i32.eqz
                                        br_if 0 (;@18;)
                                        local.get 4
                                        i32.eqz
                                        br_if 0 (;@18;)
                                        loop  ;; label = @19
                                          local.get 5
                                          i32.load8_u
                                          i32.eqz
                                          br_if 2 (;@17;)
                                          local.get 4
                                          i32.const 1
                                          i32.sub
                                          local.tee 4
                                          i32.const 0
                                          i32.ne
                                          local.set 10
                                          local.get 5
                                          i32.const 1
                                          i32.add
                                          local.tee 5
                                          i32.const 3
                                          i32.and
                                          i32.eqz
                                          br_if 1 (;@18;)
                                          local.get 4
                                          br_if 0 (;@19;)
                                        end
                                      end
                                      local.get 10
                                      i32.eqz
                                      br_if 1 (;@16;)
                                    end
                                    block  ;; label = @17
                                      local.get 5
                                      i32.load8_u
                                      i32.eqz
                                      br_if 0 (;@17;)
                                      local.get 4
                                      i32.const 4
                                      i32.lt_u
                                      br_if 0 (;@17;)
                                      loop  ;; label = @18
                                        local.get 5
                                        i32.load
                                        local.tee 10
                                        i32.const -1
                                        i32.xor
                                        local.get 10
                                        i32.const 16843009
                                        i32.sub
                                        i32.and
                                        i32.const -2139062144
                                        i32.and
                                        br_if 1 (;@17;)
                                        local.get 5
                                        i32.const 4
                                        i32.add
                                        local.set 5
                                        local.get 4
                                        i32.const 4
                                        i32.sub
                                        local.tee 4
                                        i32.const 3
                                        i32.gt_u
                                        br_if 0 (;@18;)
                                      end
                                    end
                                    local.get 4
                                    i32.eqz
                                    br_if 0 (;@16;)
                                    loop  ;; label = @17
                                      local.get 5
                                      local.get 5
                                      i32.load8_u
                                      i32.eqz
                                      br_if 2 (;@15;)
                                      drop
                                      local.get 5
                                      i32.const 1
                                      i32.add
                                      local.set 5
                                      local.get 4
                                      i32.const 1
                                      i32.sub
                                      local.tee 4
                                      br_if 0 (;@17;)
                                    end
                                  end
                                  i32.const 0
                                end
                                local.tee 4
                                local.get 7
                                local.get 8
                                i32.add
                                local.get 4
                                select
                                local.set 10
                                local.get 9
                                local.set 5
                                local.get 4
                                local.get 7
                                i32.sub
                                local.get 8
                                local.get 4
                                select
                                local.set 8
                                br 10 (;@4;)
                              end
                              local.get 8
                              if  ;; label = @14
                                local.get 6
                                i32.load offset=64
                                br 2 (;@12;)
                              end
                              i32.const 0
                              local.set 4
                              local.get 0
                              i32.const 32
                              local.get 11
                              i32.const 0
                              local.get 5
                              call 2
                              br 2 (;@11;)
                            end
                            local.get 6
                            i32.const 0
                            i32.store offset=12
                            local.get 6
                            local.get 6
                            i64.load offset=64
                            i64.store32 offset=8
                            local.get 6
                            local.get 6
                            i32.const 8
                            i32.add
                            i32.store offset=64
                            i32.const -1
                            local.set 8
                            local.get 6
                            i32.const 8
                            i32.add
                          end
                          local.set 9
                          i32.const 0
                          local.set 4
                          block  ;; label = @12
                            loop  ;; label = @13
                              local.get 9
                              i32.load
                              local.tee 7
                              i32.eqz
                              br_if 1 (;@12;)
                              block  ;; label = @14
                                local.get 6
                                i32.const 4
                                i32.add
                                local.get 7
                                call 6
                                local.tee 7
                                i32.const 0
                                i32.lt_s
                                local.tee 10
                                br_if 0 (;@14;)
                                local.get 7
                                local.get 8
                                local.get 4
                                i32.sub
                                i32.gt_u
                                br_if 0 (;@14;)
                                local.get 9
                                i32.const 4
                                i32.add
                                local.set 9
                                local.get 8
                                local.get 4
                                local.get 7
                                i32.add
                                local.tee 4
                                i32.gt_u
                                br_if 1 (;@13;)
                                br 2 (;@12;)
                              end
                            end
                            i32.const -1
                            local.set 13
                            local.get 10
                            br_if 11 (;@1;)
                          end
                          local.get 0
                          i32.const 32
                          local.get 11
                          local.get 4
                          local.get 5
                          call 2
                          local.get 4
                          i32.eqz
                          if  ;; label = @12
                            i32.const 0
                            local.set 4
                            br 1 (;@11;)
                          end
                          i32.const 0
                          local.set 9
                          local.get 6
                          i32.load offset=64
                          local.set 12
                          loop  ;; label = @12
                            local.get 12
                            i32.load
                            local.tee 7
                            i32.eqz
                            br_if 1 (;@11;)
                            local.get 6
                            i32.const 4
                            i32.add
                            local.get 7
                            call 6
                            local.tee 7
                            local.get 9
                            i32.add
                            local.tee 9
                            local.get 4
                            i32.gt_s
                            br_if 1 (;@11;)
                            local.get 0
                            local.get 6
                            i32.const 4
                            i32.add
                            local.get 7
                            call 3
                            local.get 12
                            i32.const 4
                            i32.add
                            local.set 12
                            local.get 4
                            local.get 9
                            i32.gt_u
                            br_if 0 (;@12;)
                          end
                        end
                        local.get 0
                        i32.const 32
                        local.get 11
                        local.get 4
                        local.get 5
                        i32.const 8192
                        i32.xor
                        call 2
                        local.get 11
                        local.get 4
                        local.get 4
                        local.get 11
                        i32.lt_s
                        select
                        local.set 4
                        br 8 (;@2;)
                      end
                      local.get 0
                      local.get 6
                      f64.load offset=64
                      local.get 11
                      local.get 8
                      local.get 5
                      local.get 4
                      i32.const 0
                      call_indirect (type 5)
                      local.set 4
                      br 7 (;@2;)
                    end
                    local.get 6
                    local.get 6
                    i64.load offset=64
                    i64.store8 offset=55
                    i32.const 1
                    local.set 8
                    local.get 19
                    local.set 7
                    local.get 9
                    local.set 5
                    br 4 (;@4;)
                  end
                  local.get 6
                  local.get 4
                  i32.const 1
                  i32.add
                  local.tee 9
                  i32.store offset=76
                  local.get 4
                  i32.load8_u offset=1
                  local.set 5
                  local.get 9
                  local.set 4
                  br 0 (;@7;)
                end
                unreachable
              end
              local.get 14
              local.set 13
              local.get 0
              br_if 4 (;@1;)
              local.get 17
              i32.eqz
              br_if 2 (;@3;)
              i32.const 1
              local.set 4
              loop  ;; label = @6
                local.get 3
                local.get 4
                i32.const 2
                i32.shl
                i32.add
                i32.load
                local.tee 0
                if  ;; label = @7
                  local.get 2
                  local.get 4
                  i32.const 3
                  i32.shl
                  i32.add
                  local.get 0
                  local.get 1
                  call 8
                  i32.const 1
                  local.set 13
                  local.get 4
                  i32.const 1
                  i32.add
                  local.tee 4
                  i32.const 10
                  i32.ne
                  br_if 1 (;@6;)
                  br 6 (;@1;)
                end
              end
              i32.const 1
              local.set 13
              local.get 4
              i32.const 10
              i32.ge_u
              br_if 4 (;@1;)
              loop  ;; label = @6
                local.get 3
                local.get 4
                i32.const 2
                i32.shl
                i32.add
                i32.load
                br_if 1 (;@5;)
                local.get 4
                i32.const 1
                i32.add
                local.tee 4
                i32.const 10
                i32.ne
                br_if 0 (;@6;)
              end
              br 4 (;@1;)
            end
            i32.const -1
            local.set 13
            br 3 (;@1;)
          end
          local.get 0
          i32.const 32
          local.get 13
          local.get 10
          local.get 7
          i32.sub
          local.tee 10
          local.get 8
          local.get 8
          local.get 10
          i32.lt_s
          select
          local.tee 8
          i32.add
          local.tee 9
          local.get 11
          local.get 9
          local.get 11
          i32.gt_s
          select
          local.tee 4
          local.get 9
          local.get 5
          call 2
          local.get 0
          local.get 15
          local.get 13
          call 3
          local.get 0
          i32.const 48
          local.get 4
          local.get 9
          local.get 5
          i32.const 65536
          i32.xor
          call 2
          local.get 0
          i32.const 48
          local.get 8
          local.get 10
          i32.const 0
          call 2
          local.get 0
          local.get 7
          local.get 10
          call 3
          local.get 0
          i32.const 32
          local.get 4
          local.get 9
          local.get 5
          i32.const 8192
          i32.xor
          call 2
          br 1 (;@2;)
        end
      end
      i32.const 0
      local.set 13
    end
    local.get 6
    i32.const 80
    i32.add
    global.set 0
    local.get 13)
  (func (;5;) (type 6)
    nop)
  (func (;6;) (type 7) (param i32 i32) (result i32)
    local.get 0
    i32.eqz
    if  ;; label = @1
      i32.const 0
      return
    end
    block (result i32)  ;; label = @1
      block  ;; label = @2
        local.get 0
        if (result i32)  ;; label = @3
          local.get 1
          i32.const 127
          i32.le_u
          br_if 1 (;@2;)
          block  ;; label = @4
            i32.const 1868
            i32.load
            i32.load
            i32.eqz
            if  ;; label = @5
              local.get 1
              i32.const -128
              i32.and
              i32.const 57216
              i32.eq
              br_if 3 (;@2;)
              br 1 (;@4;)
            end
            local.get 1
            i32.const 2047
            i32.le_u
            if  ;; label = @5
              local.get 0
              local.get 1
              i32.const 63
              i32.and
              i32.const 128
              i32.or
              i32.store8 offset=1
              local.get 0
              local.get 1
              i32.const 6
              i32.shr_u
              i32.const 192
              i32.or
              i32.store8
              i32.const 2
              br 4 (;@1;)
            end
            local.get 1
            i32.const 55296
            i32.ge_u
            i32.const 0
            local.get 1
            i32.const -8192
            i32.and
            i32.const 57344
            i32.ne
            select
            i32.eqz
            if  ;; label = @5
              local.get 0
              local.get 1
              i32.const 63
              i32.and
              i32.const 128
              i32.or
              i32.store8 offset=2
              local.get 0
              local.get 1
              i32.const 12
              i32.shr_u
              i32.const 224
              i32.or
              i32.store8
              local.get 0
              local.get 1
              i32.const 6
              i32.shr_u
              i32.const 63
              i32.and
              i32.const 128
              i32.or
              i32.store8 offset=1
              i32.const 3
              br 4 (;@1;)
            end
            local.get 1
            i32.const 65536
            i32.sub
            i32.const 1048575
            i32.le_u
            if  ;; label = @5
              local.get 0
              local.get 1
              i32.const 63
              i32.and
              i32.const 128
              i32.or
              i32.store8 offset=3
              local.get 0
              local.get 1
              i32.const 18
              i32.shr_u
              i32.const 240
              i32.or
              i32.store8
              local.get 0
              local.get 1
              i32.const 6
              i32.shr_u
              i32.const 63
              i32.and
              i32.const 128
              i32.or
              i32.store8 offset=2
              local.get 0
              local.get 1
              i32.const 12
              i32.shr_u
              i32.const 63
              i32.and
              i32.const 128
              i32.or
              i32.store8 offset=1
              i32.const 4
              br 4 (;@1;)
            end
          end
          i32.const 1936
          i32.const 25
          i32.store
          i32.const -1
        else
          i32.const 1
        end
        br 1 (;@1;)
      end
      local.get 0
      local.get 1
      i32.store8
      i32.const 1
    end)
  (func (;7;) (type 1) (param i32 i32 i32)
    (local i32 i32 i64)
    block  ;; label = @1
      local.get 2
      i32.eqz
      br_if 0 (;@1;)
      local.get 0
      local.get 2
      i32.add
      local.tee 3
      i32.const 1
      i32.sub
      local.get 1
      i32.store8
      local.get 0
      local.get 1
      i32.store8
      local.get 2
      i32.const 3
      i32.lt_u
      br_if 0 (;@1;)
      local.get 3
      i32.const 2
      i32.sub
      local.get 1
      i32.store8
      local.get 0
      local.get 1
      i32.store8 offset=1
      local.get 3
      i32.const 3
      i32.sub
      local.get 1
      i32.store8
      local.get 0
      local.get 1
      i32.store8 offset=2
      local.get 2
      i32.const 7
      i32.lt_u
      br_if 0 (;@1;)
      local.get 3
      i32.const 4
      i32.sub
      local.get 1
      i32.store8
      local.get 0
      local.get 1
      i32.store8 offset=3
      local.get 2
      i32.const 9
      i32.lt_u
      br_if 0 (;@1;)
      local.get 0
      i32.const 0
      local.get 0
      i32.sub
      i32.const 3
      i32.and
      local.tee 4
      i32.add
      local.tee 3
      local.get 1
      i32.const 255
      i32.and
      i32.const 16843009
      i32.mul
      local.tee 0
      i32.store
      local.get 3
      local.get 2
      local.get 4
      i32.sub
      i32.const -4
      i32.and
      local.tee 2
      i32.add
      local.tee 1
      i32.const 4
      i32.sub
      local.get 0
      i32.store
      local.get 2
      i32.const 9
      i32.lt_u
      br_if 0 (;@1;)
      local.get 3
      local.get 0
      i32.store offset=8
      local.get 3
      local.get 0
      i32.store offset=4
      local.get 1
      i32.const 8
      i32.sub
      local.get 0
      i32.store
      local.get 1
      i32.const 12
      i32.sub
      local.get 0
      i32.store
      local.get 2
      i32.const 25
      i32.lt_u
      br_if 0 (;@1;)
      local.get 3
      local.get 0
      i32.store offset=24
      local.get 3
      local.get 0
      i32.store offset=20
      local.get 3
      local.get 0
      i32.store offset=16
      local.get 3
      local.get 0
      i32.store offset=12
      local.get 1
      i32.const 16
      i32.sub
      local.get 0
      i32.store
      local.get 1
      i32.const 20
      i32.sub
      local.get 0
      i32.store
      local.get 1
      i32.const 24
      i32.sub
      local.get 0
      i32.store
      local.get 1
      i32.const 28
      i32.sub
      local.get 0
      i32.store
      local.get 2
      local.get 3
      i32.const 4
      i32.and
      i32.const 24
      i32.or
      local.tee 1
      i32.sub
      local.tee 2
      i32.const 32
      i32.lt_u
      br_if 0 (;@1;)
      local.get 0
      i64.extend_i32_u
      i64.const 4294967297
      i64.mul
      local.set 5
      local.get 1
      local.get 3
      i32.add
      local.set 1
      loop  ;; label = @2
        local.get 1
        local.get 5
        i64.store offset=24
        local.get 1
        local.get 5
        i64.store offset=16
        local.get 1
        local.get 5
        i64.store offset=8
        local.get 1
        local.get 5
        i64.store
        local.get 1
        i32.const 32
        i32.add
        local.set 1
        local.get 2
        i32.const 32
        i32.sub
        local.tee 2
        i32.const 31
        i32.gt_u
        br_if 0 (;@2;)
      end
    end)
  (func (;8;) (type 1) (param i32 i32 i32)
    block  ;; label = @1
      local.get 1
      i32.const 20
      i32.gt_u
      br_if 0 (;@1;)
      block  ;; label = @2
        block  ;; label = @3
          block  ;; label = @4
            block  ;; label = @5
              block  ;; label = @6
                block  ;; label = @7
                  block  ;; label = @8
                    block  ;; label = @9
                      block  ;; label = @10
                        block  ;; label = @11
                          local.get 1
                          i32.const 9
                          i32.sub
                          br_table 0 (;@11;) 1 (;@10;) 2 (;@9;) 3 (;@8;) 4 (;@7;) 5 (;@6;) 6 (;@5;) 7 (;@4;) 8 (;@3;) 9 (;@2;) 10 (;@1;)
                        end
                        local.get 2
                        local.get 2
                        i32.load
                        local.tee 1
                        i32.const 4
                        i32.add
                        i32.store
                        local.get 0
                        local.get 1
                        i32.load
                        i32.store
                        return
                      end
                      local.get 2
                      local.get 2
                      i32.load
                      local.tee 1
                      i32.const 4
                      i32.add
                      i32.store
                      local.get 0
                      local.get 1
                      i64.load32_s
                      i64.store
                      return
                    end
                    local.get 2
                    local.get 2
                    i32.load
                    local.tee 1
                    i32.const 4
                    i32.add
                    i32.store
                    local.get 0
                    local.get 1
                    i64.load32_u
                    i64.store
                    return
                  end
                  local.get 2
                  local.get 2
                  i32.load
                  i32.const 7
                  i32.add
                  i32.const -8
                  i32.and
                  local.tee 1
                  i32.const 8
                  i32.add
                  i32.store
                  local.get 0
                  local.get 1
                  i64.load
                  i64.store
                  return
                end
                local.get 2
                local.get 2
                i32.load
                local.tee 1
                i32.const 4
                i32.add
                i32.store
                local.get 0
                local.get 1
                i64.load16_s
                i64.store
                return
              end
              local.get 2
              local.get 2
              i32.load
              local.tee 1
              i32.const 4
              i32.add
              i32.store
              local.get 0
              local.get 1
              i64.load16_u
              i64.store
              return
            end
            local.get 2
            local.get 2
            i32.load
            local.tee 1
            i32.const 4
            i32.add
            i32.store
            local.get 0
            local.get 1
            i64.load8_s
            i64.store
            return
          end
          local.get 2
          local.get 2
          i32.load
          local.tee 1
          i32.const 4
          i32.add
          i32.store
          local.get 0
          local.get 1
          i64.load8_u
          i64.store
          return
        end
        local.get 2
        local.get 2
        i32.load
        i32.const 7
        i32.add
        i32.const -8
        i32.and
        local.tee 1
        i32.const 8
        i32.add
        i32.store
        local.get 0
        local.get 1
        f64.load
        f64.store
        return
      end
      local.get 0
      local.get 2
      i32.const 0
      call_indirect (type 8)
    end)
  (func (;9;) (type 2) (param i32) (result i32)
    (local i32 i32 i32)
    local.get 0
    i32.load
    i32.load8_s
    i32.const 48
    i32.sub
    i32.const 10
    i32.lt_u
    if  ;; label = @1
      loop  ;; label = @2
        local.get 0
        i32.load
        local.tee 1
        i32.load8_s
        local.set 3
        local.get 0
        local.get 1
        i32.const 1
        i32.add
        i32.store
        local.get 3
        local.get 2
        i32.const 10
        i32.mul
        i32.add
        i32.const 48
        i32.sub
        local.set 2
        local.get 1
        i32.load8_s offset=1
        i32.const 48
        i32.sub
        i32.const 10
        i32.lt_u
        br_if 0 (;@2;)
      end
    end
    local.get 2)
  (func (;10;) (type 9) (param i32 i64 i32) (result i64)
    i64.const 0)
  (func (;11;) (type 2) (param i32) (result i32)
    i32.const 0)
  (func (;12;) (type 0) (param i32 i32 i32) (result i32)
    (local i32 i32 i32 i32 i32 i32 i32)
    global.get 0
    i32.const 32
    i32.sub
    local.tee 3
    global.set 0
    local.get 3
    local.get 0
    i32.load offset=28
    local.tee 5
    i32.store offset=16
    local.get 0
    i32.load offset=20
    local.set 4
    local.get 3
    local.get 2
    i32.store offset=28
    local.get 3
    local.get 1
    i32.store offset=24
    local.get 3
    local.get 4
    local.get 5
    i32.sub
    local.tee 1
    i32.store offset=20
    local.get 1
    local.get 2
    i32.add
    local.set 5
    i32.const 2
    local.set 7
    local.get 3
    i32.const 16
    i32.add
    local.set 1
    block (result i32)  ;; label = @1
      block  ;; label = @2
        block  ;; label = @3
          local.get 0
          i32.load offset=60
          local.get 3
          i32.const 16
          i32.add
          i32.const 2
          local.get 3
          i32.const 12
          i32.add
          call 0
          local.tee 4
          if (result i32)  ;; label = @4
            i32.const 1936
            local.get 4
            i32.store
            i32.const -1
          else
            i32.const 0
          end
          i32.eqz
          if  ;; label = @4
            loop  ;; label = @5
              local.get 5
              local.get 3
              i32.load offset=12
              local.tee 4
              i32.eq
              br_if 2 (;@3;)
              local.get 4
              i32.const -1
              i32.le_s
              br_if 3 (;@2;)
              local.get 1
              local.get 4
              local.get 1
              i32.load offset=4
              local.tee 8
              i32.gt_u
              local.tee 6
              i32.const 3
              i32.shl
              i32.add
              local.tee 9
              local.get 4
              local.get 8
              i32.const 0
              local.get 6
              select
              i32.sub
              local.tee 8
              local.get 9
              i32.load
              i32.add
              i32.store
              local.get 1
              i32.const 12
              i32.const 4
              local.get 6
              select
              i32.add
              local.tee 9
              local.get 9
              i32.load
              local.get 8
              i32.sub
              i32.store
              local.get 5
              local.get 4
              i32.sub
              local.set 5
              local.get 0
              i32.load offset=60
              local.get 1
              i32.const 8
              i32.add
              local.get 1
              local.get 6
              select
              local.tee 1
              local.get 7
              local.get 6
              i32.sub
              local.tee 7
              local.get 3
              i32.const 12
              i32.add
              call 0
              local.tee 4
              if (result i32)  ;; label = @6
                i32.const 1936
                local.get 4
                i32.store
                i32.const -1
              else
                i32.const 0
              end
              i32.eqz
              br_if 0 (;@5;)
            end
          end
          local.get 5
          i32.const -1
          i32.ne
          br_if 1 (;@2;)
        end
        local.get 0
        local.get 0
        i32.load offset=44
        local.tee 1
        i32.store offset=28
        local.get 0
        local.get 1
        i32.store offset=20
        local.get 0
        local.get 1
        local.get 0
        i32.load offset=48
        i32.add
        i32.store offset=16
        local.get 2
        br 1 (;@1;)
      end
      local.get 0
      i32.const 0
      i32.store offset=28
      local.get 0
      i64.const 0
      i64.store offset=16
      local.get 0
      local.get 0
      i32.load
      i32.const 32
      i32.or
      i32.store
      i32.const 0
      local.get 7
      i32.const 2
      i32.eq
      br_if 0 (;@1;)
      drop
      local.get 2
      local.get 1
      i32.load offset=4
      i32.sub
    end
    local.set 0
    local.get 3
    i32.const 32
    i32.add
    global.set 0
    local.get 0)
  (func (;13;) (type 2) (param i32) (result i32)
    global.get 0
    local.get 0
    i32.sub
    i32.const -16
    i32.and
    local.tee 0
    global.set 0
    local.get 0)
  (func (;14;) (type 10) (param i32)
    local.get 0
    global.set 0)
  (func (;15;) (type 11) (result i32)
    global.get 0)
  (func (;16;) (type 12) (param i32 i32 i32 i32)
    (local i32 i32 i32 i32 i32 i32 i32 i32)
    global.get 0
    i32.const 16
    i32.sub
    local.tee 6
    global.set 0
    local.get 6
    local.get 3
    i32.store offset=12
    local.get 6
    local.get 2
    i32.store offset=8
    local.get 6
    local.get 1
    i32.store offset=4
    local.get 6
    local.get 0
    i32.store
    global.get 0
    i32.const 16
    i32.sub
    local.tee 8
    global.set 0
    local.get 8
    local.get 6
    i32.store offset=12
    i32.const 1060
    i32.load
    local.set 4
    global.get 0
    i32.const 208
    i32.sub
    local.tee 5
    global.set 0
    local.get 5
    local.get 6
    i32.store offset=204
    local.get 5
    i32.const 160
    i32.add
    i32.const 0
    i32.const 40
    call 7
    local.get 5
    local.get 5
    i32.load offset=204
    i32.store offset=200
    block  ;; label = @1
      i32.const 0
      local.get 5
      i32.const 200
      i32.add
      local.get 5
      i32.const 80
      i32.add
      local.get 5
      i32.const 160
      i32.add
      call 4
      i32.const 0
      i32.lt_s
      br_if 0 (;@1;)
      local.get 4
      i32.load offset=76
      i32.const 0
      i32.ge_s
      local.set 10
      local.get 4
      i32.load
      local.set 7
      local.get 4
      i32.load8_s offset=74
      i32.const 0
      i32.le_s
      if  ;; label = @2
        local.get 4
        local.get 7
        i32.const -33
        i32.and
        i32.store
      end
      local.get 7
      i32.const 32
      i32.and
      local.set 11
      block (result i32)  ;; label = @2
        local.get 4
        i32.load offset=48
        if  ;; label = @3
          local.get 4
          local.get 5
          i32.const 200
          i32.add
          local.get 5
          i32.const 80
          i32.add
          local.get 5
          i32.const 160
          i32.add
          call 4
          br 1 (;@2;)
        end
        local.get 4
        i32.const 80
        i32.store offset=48
        local.get 4
        local.get 5
        i32.const 80
        i32.add
        i32.store offset=16
        local.get 4
        local.get 5
        i32.store offset=28
        local.get 4
        local.get 5
        i32.store offset=20
        local.get 4
        i32.load offset=44
        local.set 7
        local.get 4
        local.get 5
        i32.store offset=44
        local.get 4
        local.get 5
        i32.const 200
        i32.add
        local.get 5
        i32.const 80
        i32.add
        local.get 5
        i32.const 160
        i32.add
        call 4
        local.get 7
        i32.eqz
        br_if 0 (;@2;)
        drop
        local.get 4
        i32.const 0
        i32.const 0
        local.get 4
        i32.load offset=36
        call_indirect (type 0)
        drop
        local.get 4
        i32.const 0
        i32.store offset=48
        local.get 4
        local.get 7
        i32.store offset=44
        local.get 4
        i32.const 0
        i32.store offset=28
        local.get 4
        i32.const 0
        i32.store offset=16
        local.get 4
        i32.load offset=20
        drop
        local.get 4
        i32.const 0
        i32.store offset=20
        i32.const 0
      end
      drop
      local.get 4
      local.get 4
      i32.load
      local.get 11
      i32.or
      i32.store
      local.get 10
      i32.eqz
      br_if 0 (;@1;)
    end
    local.get 5
    i32.const 208
    i32.add
    global.set 0
    local.get 8
    i32.const 16
    i32.add
    global.set 0
    block  ;; label = @1
      local.get 2
      i32.eqz
      br_if 0 (;@1;)
      local.get 2
      i32.const 1
      i32.ne
      if  ;; label = @2
        local.get 2
        i32.const -2
        i32.and
        local.set 4
        loop  ;; label = @3
          local.get 1
          local.get 9
          i32.const 1
          i32.shl
          local.tee 5
          i32.add
          local.get 0
          local.get 5
          i32.add
          local.tee 8
          i32.load16_s
          local.get 3
          i32.const 16
          i32.shl
          i32.const 16
          i32.shr_s
          i32.sub
          local.tee 3
          i32.const 1
          i32.shl
          local.get 3
          i32.const 31
          i32.shr_s
          i32.xor
          i32.store16
          local.get 1
          local.get 5
          i32.const 2
          i32.or
          local.tee 3
          i32.add
          local.get 0
          local.get 3
          i32.add
          local.tee 3
          i32.load16_s
          local.get 8
          i32.load16_s
          i32.sub
          local.tee 5
          i32.const 1
          i32.shl
          local.get 5
          i32.const 31
          i32.shr_s
          i32.xor
          i32.store16
          local.get 9
          i32.const 2
          i32.add
          local.set 9
          local.get 3
          i32.load16_u
          local.set 3
          local.get 4
          i32.const 2
          i32.sub
          local.tee 4
          br_if 0 (;@3;)
        end
      end
      local.get 2
      i32.const 1
      i32.and
      i32.eqz
      br_if 0 (;@1;)
      local.get 1
      local.get 9
      i32.const 1
      i32.shl
      local.tee 2
      i32.add
      local.get 0
      local.get 2
      i32.add
      i32.load16_s
      local.get 3
      i32.const 16
      i32.shl
      i32.const 16
      i32.shr_s
      i32.sub
      local.tee 0
      i32.const 1
      i32.shl
      local.get 0
      i32.const 31
      i32.shr_s
      i32.xor
      i32.store16
    end
    local.get 6
    i32.const 16
    i32.add
    global.set 0)
  (table (;0;) 4 4 funcref)
  (memory (;0;) 256 256)
  (global (;0;) (mut i32) (i32.const 5245936))
  (export "c" (memory 0))
  (export "d" (func 5))
  (export "e" (func 16))
  (export "f" (table 0))
  (export "g" (func 15))
  (export "h" (func 14))
  (export "i" (func 13))
  (elem (;0;) (i32.const 1) func 11 12 10)
  (data (;0;) (i32.const 1024) "-+   0X0x\00wat %p %p %zu %d\00(null)\00\00\00\10\06")
  (data (;1;) (i32.const 1072) "\11\00\0a\00\11\11\11\00\00\00\00\05\00\00\00\00\00\00\09\00\00\00\00\0b\00\00\00\00\00\00\00\00\11\00\0f\0a\11\11\11\03\0a\07\00\01\00\09\0b\0b\00\00\09\06\0b\00\00\0b\00\06\11\00\00\00\11\11\11")
  (data (;2;) (i32.const 1153) "\0b\00\00\00\00\00\00\00\00\11\00\0a\0a\11\11\11\00\0a\00\00\02\00\09\0b\00\00\00\09\00\0b\00\00\0b")
  (data (;3;) (i32.const 1211) "\0c")
  (data (;4;) (i32.const 1223) "\0c\00\00\00\00\0c\00\00\00\00\09\0c\00\00\00\00\00\0c\00\00\0c")
  (data (;5;) (i32.const 1269) "\0e")
  (data (;6;) (i32.const 1281) "\0d\00\00\00\04\0d\00\00\00\00\09\0e\00\00\00\00\00\0e\00\00\0e")
  (data (;7;) (i32.const 1327) "\10")
  (data (;8;) (i32.const 1339) "\0f\00\00\00\00\0f\00\00\00\00\09\10\00\00\00\00\00\10\00\00\10\00\00\12\00\00\00\12\12\12")
  (data (;9;) (i32.const 1394) "\12\00\00\00\12\12\12\00\00\00\00\00\00\09")
  (data (;10;) (i32.const 1443) "\0b")
  (data (;11;) (i32.const 1455) "\0a\00\00\00\00\0a\00\00\00\00\09\0b\00\00\00\00\00\0b\00\00\0b")
  (data (;12;) (i32.const 1501) "\0c")
  (data (;13;) (i32.const 1513) "\0c\00\00\00\00\0c\00\00\00\00\09\0c\00\00\00\00\00\0c\00\00\0c\00\000123456789ABCDEF")
  (data (;14;) (i32.const 1552) "\05")
  (data (;15;) (i32.const 1564) "\01")
  (data (;16;) (i32.const 1588) "\02\00\00\00\03\00\00\00\a8\07\00\00\00\04")
  (data (;17;) (i32.const 1612) "\01")
  (data (;18;) (i32.const 1627) "\0a\ff\ff\ff\ff")
  (data (;19;) (i32.const 1868) "\d0\0b"))
